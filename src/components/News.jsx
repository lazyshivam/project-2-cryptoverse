import React from "react";
import { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment/moment";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Text, Title } = Typography;
const { Option } = Select;
const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    pageSize: simplified ? 10 : 30,
  });
  const { data } = useGetCryptosQuery(100);
  console.log(cryptoNews);
  if (!cryptoNews) return <Loader />;

  const demoImage = "https://img.freepik.com/free-photo/stock-market-chart-virtual-screen-with-woman-s-hand-digital-remix_53876-124663.jpg?w=1060&t=st=1663143751~exp=1663144351~hmac=f3c6bd2464f4998e3e17e3a058d3721d45e5a3cfd9f22c0ed448218f184fd516";
  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin) => (
                <Option value={coin.name}>{coin.name}</Option>
              ))}
            </Select>
          </Col>
        )}

        {cryptoNews?.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.title}
                  </Title>
                  <img
                    src={news.image.url || demoImage}
                    alt="News"
                    style={{ maxWidth: "150px", maxHeight: "120px", borderRadius: "10px" }}
                  />
                </div>
                <p>
                  {news.description > 50
                    ? `${news.description.substring(0, 50)}...`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news.image.thumbnail ||
                        demoImage
                      }
                      alt="image"
                    />
                    <Text className="provider-name">
                      {news.provider.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.datePublished
                    ).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
