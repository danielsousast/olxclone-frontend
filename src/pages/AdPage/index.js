import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { format } from "date-fns";
import { Wraper } from "../../components/Styled";
import { Content, Fake, Bottom, Breadchumb } from "./styles";
import AdItem from "../../components/AdItem";
import api from "../../services/api";

const AdPage = () => {
  const [loading, setLoading] = useState(true);
  const [adInfo, setAdInfo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function loadAd() {
      const response = await api.get(`/ad/item?id=${id}`);

      setAdInfo(response.data);
      setLoading(false);
    }

    loadAd();
  }, [id]);

  function formatDate(date) {
    return format(new Date(date), "MM/dd/yyyy");
  }

  return (
    <Wraper>
      <div className="container">
        {adInfo.category && (
          <Breadchumb>
            Você está aqui:
            <Link to="/">Home</Link>/
            <Link to={`/ads?state=${adInfo.stateName}`}>
              {adInfo.stateName}
            </Link>
            /
            <Link
              to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}
            >
              {adInfo.category.name}
            </Link>
            / {adInfo.title}
          </Breadchumb>
        )}
        <Content>
          <div className="leftSide">
            <div className="box">
              <div className="adImage">
                {loading && <Fake height={300} />}
                {adInfo.images && (
                  <Slide className="slide">
                    {adInfo.images.map((img, k) => (
                      <div className="each-slide">
                        <img src={img} alt="" />
                      </div>
                    ))}
                  </Slide>
                )}
              </div>
              <div className="adInfo">
                <div className="adName">
                  {loading && <Fake height={20} />}
                  {adInfo.title && <h2 className="adTitle">{adInfo.title}</h2>}
                  {adInfo.dateCreated && (
                    <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                  )}
                </div>
                <div className="adDescription padding-right">
                  {loading && <Fake height={100} />}
                  {adInfo.description}
                  <hr />
                  {adInfo.views && <small>Visualizações: {adInfo.views}</small>}
                </div>
              </div>
            </div>
          </div>
          <div className="rightSide">
            <div className="box padding">
              {loading && <Fake height={20} />}
              {adInfo.priceNegotiable && "Preço Negociável"}
              {!adInfo.priceNegotiable && adInfo.price && (
                <div className="price">
                  Preço: <span>R$ {adInfo.price}</span>
                </div>
              )}
            </div>
            {loading && <Fake height={50} />}
            {adInfo.userInfo && (
              <>
                <a
                  href={`mailto:${adInfo.userInfo.email}`}
                  targe="_blank"
                  className="contact-seller"
                >
                  Fale com o vendedor
                </a>
                <div className="createdBy box padding">
                  <strong>{adInfo.userInfo.name}</strong>
                  <small>Email: {adInfo.userInfo.email}</small>
                  <small>Email: {adInfo.stateName}</small>
                </div>
              </>
            )}
          </div>
        </Content>
        <Bottom>
          {adInfo.others && (
            <>
              <h2>Outras ofertas</h2>
              <div className="other-list">
                {adInfo.others.map((item, index) => (
                  <AdItem key={index} data={item} />
                ))}
              </div>
            </>
          )}
        </Bottom>
      </div>
    </Wraper>
  );
};

export default AdPage;
