import React, { useRef, useEffect } from "react";
import Cookies from  'js-cookie';
import MaskedInput from "react-text-mask";
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { Wraper, Title, ErrorMessage } from "../../components/Styled";
import { Content } from "./styles";
import { useState } from "react";
import api from '../../services/api';
import { useHistory } from "react-router-dom";

const NewAd = () => {
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [negotiable, setNegotiable] = useState(false);
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([]);

    const priceMask = createNumberMask({
      prefix:'R$',
      includeThousandSeparator:true,
      thousandsSeparatorSymbal:'.',
      allowDecimal:true,
      decimalSymble:','
    })

    const fileRef = useRef();
    const hisotry = useHistory();

    useEffect(() => {
        async function loadCategories() {
            let response = await api.get('/categories');

            setCategories(response.data.categories);
        }

        loadCategories();
    }, []);

    async function handleSubmit(event) {
      event.preventDefault();
      setDisabled(true);
      setError('');
      
      let errors = [];

      if(!title.trim()) {
        errors.push('Insira um titulo');
      }
      if(!category) {
        errors.push('Selecione uam categoria');
      }

      if(errors.length === 0) {
        const token = Cookies.get('token')
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('priceneg', negotiable);
        formData.append('desc', description);
        formData.append('cat', category);
        formData.append('token', token);

        if(fileRef.current.files.length > 0) {
          for(let i in fileRef.current.files) {
            formData.append('img', fileRef.current.files[i]);
          }
        }

        const response = await api.post('/ad/add', formData);
        if(!response.error) {
          hisotry.push(`/ad/${response.data.id}`);
          return;
        }
        setError(response.error);
        return;

      } else {
        setError(errors.join("\n"));
      }

      setDisabled(false);
    }

  return (
    <Wraper>
      <div className="container">
        <Title>Poste um anúncio</Title>

        <Content>
        {error && <ErrorMessage>{error}</ErrorMessage>}
          <form onSubmit={handleSubmit}>
          <label htmlFor="title" className="label-form">
              <div className="title-box">Título</div>
              <div className="input-box">
                <input
                  type="text"
                  name="title"
                  disabled={disabled}
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </label>

            <label htmlFor="category" className="label-form">
              <div className="title-box">Categoria</div>
              <div className="input-box">
                <select name="category" 
                    disabled={disabled}
                    required
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option></option>
                    {categories && categories.map((item, index) => 
                        <option key={index} value={item._id}>{item.name}</option>
                    )}
                </select>
              </div>
            </label>

            <label htmlFor="email" className="label-form">
              <div className="title-box">Preço</div>
              <div className="input-box">
                    <MaskedInput 
                      mask={priceMask}
                      placeholder="R$"
                      disabled={disabled || negotiable}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
              </div>
            </label>

            <label htmlFor="email" className="label-form">
              <div className="title-box">Preço  negociável</div>
              <div className="input-box checkbox">
                <input type="checkbox" name="negotiable"
                    disabled={disabled}
                    checked={negotiable}
                    onChange={() => setNegotiable(!negotiable)}
                />
              </div>
            </label>

            <label htmlFor="description" className="label-form">
              <div className="title-box">Descrição</div>
              <div className="input-box">
                <textarea
                className="textarea"
                  type="text"
                  name="description"
                  disabled={disabled}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}

                ></textarea>
              </div>
            </label>

            <label htmlFor="email" className="label-form">
              <div className="title-box">Imagens</div>
              <div className="input-box">
                    <input type="file" name="image" ref={fileRef} multiple />
              </div>
            </label>

            <label className="label-form">
              <div className="title-box"></div>
              <div className="input-box">
                <button type="submit" disabled={disabled}>Adicionar anuncio</button>
              </div>
            </label>
          </form>

        </Content>
      </div>
    </Wraper>
  );
};

export default NewAd;
