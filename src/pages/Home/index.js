import React, { useEffect, useState } from "react";
import { Wraper } from "../../components/Styled";
import { Content, Search } from "./styles";
import api from '../../services/api';
import { Link } from "react-router-dom";
import AdItem from "../../components/AdItem";

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [states, setStates] = useState([]);
    const [ads, setAds] = useState([]);

    useEffect(() => {
        async function loadStates() {
            let response = await api.get('/states');

            setStates(response.data.states);
        }

        loadStates();
    }, []);

    useEffect(() => {
        async function loadCategories() {
            let response = await api.get('/categories');

            setCategories(response.data.categories);
        }

        loadCategories();
    }, []);

    useEffect(() => {
        async function loadAds() {
            let response = await api.get('/ad/list', {
                sort:'desc',
                limit:8
            });

            setAds(response.data.ads);
        }

        loadAds();
    }, []);    

  return (
    <Wraper>
        <Search>
            <div className="container">
                <div className="search-box">
                    <form method="GET" action="/ads">
                        <input type="text" name="q" placeholder="O que você procura?"/>
                        <select name="state">
                            <option value=""></option>
                            {states && states.map((item, index) => 
                                <option key={index} value={item.id}>{item.name}</option>
                            )}
                        </select>
                        <button>Pesquisar</button>
                    </form>        
                </div>
                <div className="category-list">
                    {categories && categories.map((item,index) => 
                        <Link key={index} to={`/ads?cat=${item.slug}`} className="category-item">
                            <img src={item.img} alt=""/>
                            <span>{item.name}</span>
                        </Link>
                    )}                
                </div>
            </div>
        </Search>
      <div className="container">
        <Content>
            <h2>Anúnios recentes</h2>
            <div className="ad-list">
                {ads && ads.map((item, index) => 
                    <AdItem key={index} data={item}/>
                )}
            </div>
            <Link to="/ads" className="see-all-link">Ver todos</Link>

            <hr/>
            <p className="more">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </Content>
      </div>
    </Wraper>
  );
};

export default Home;
