/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Wraper } from "../../components/Styled";
import { Content } from "./styles";
import api from "../../services/api";
import { Link, useLocation, useHistory } from "react-router-dom";
import AdItem from "../../components/AdItem";

let timer;

const Ads = () => {
  function useQueryString() {
    return new URLSearchParams(useLocation().search);
  }
  const queryStirng = useQueryString();
  const history = useHistory();
  const [query, setQuery] = useState(
    queryStirng.get("q") != null ? queryStirng.get("q") : ""
  );
  const [category, setCategory] = useState(
    queryStirng.get("cat") != null ? queryStirng.get("cat") : ""
  );
  const [state, setState] = useState(
    queryStirng.get("state") != null ? queryStirng.get("state") : ""
  );

  const [categories, setCategories] = useState([]);
  const [states, setStates] = useState([]);
  const [ads, setAds] = useState([]);
  const [resultOpacity, setResultOpacity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    async function loadStates() {
      let response = await api.get("/states");
      setStates(response.data.states);
    }
    loadStates();
  }, []);

  useEffect(() => {
    async function loadCategories() {
      let response = await api.get("/categories");
      setCategories(response.data.categories);
    }
    loadCategories();
  }, []);

  useEffect(() => {
    let queryString = [];
    if (query) queryString.push(`q=${query}`);
    if (category) queryString.push(`cat=${category}`);
    if (state) queryString.push(`state=${state}`);

    history.replace({
      search: `${queryString.join("&")}`,
    });

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(filterAds, 2000);
    setResultOpacity(0.3);
  }, [query, category, state, history]);

  async function filterAds() {
    setLoading(true);
    const response = await api.get(
      `/ad/list?sort=desc&limit=9&q=${query}&cat=${category}&state=${state}`
    );
    setAds(response.data.ads);
    setResultOpacity(1);
    setLoading(false);
  }

  return (
    <Wraper>
      <div className="container">
        <Content>
          <div className="left-side">
            <form method="GET">
              
              <input
                type="text"
                name="query"
                value={query}
                placeholder="O que você procura"
                onChange={(e) => setQuery(e.target.value)}
              />
              
              <div className="filter-name">Estado</div>
             
              <select
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option></option>
                
                {states &&
                  states.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}

              </select>

              <div className="filter-name">Categoria</div>
              <ul>
                {categories &&
                  categories.map((item, index) => (
                    <li
                      key={index}
                      className={
                        category == item.slug
                          ? "category-item active"
                          : "category-item"
                      }
                      onClick={() => setCategory(item.slug)}
                    >
                      <img src={item.img} alt="" />
                      <span>{item.name}</span>
                    </li>
                  ))}
              </ul>
            </form>
          </div>
          <div className="right-side">
            <h2>Resultados</h2>
            {loading && 
                <div className="warning">
                    Carregando...
                </div>}
            {!loading && ads.length == 0 &&
                <div className="warning">
                    Nenhum resultado encontrado.    
                </div>
            }

            <div className="ad-list" style={{ opacity: resultOpacity }}>
              {ads &&
                ads.map((item, index) => <AdItem key={index} data={item}/>)}
            </div>
            <div className="pagination">
         
              
            </div>
          </div>
        </Content>
      </div>
    </Wraper>
  );
};

export default Ads;
