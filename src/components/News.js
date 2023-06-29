import React, {useState} from 'react'
import {Select,Typography,Row,Col,Avatar,Card} from 'antd'
import moment from 'moment'
import Loader from './Loader';

import { useGetCryptosQuery } from '../services/cryptoApi';
import {useGetCryptoNewsQuery} from '../services/cryptoNewsApi'

const {Text,Title} = Typography;
const {Option} = Select;

const demoImage=["https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?s=612x612","https://www.trustetc.com/wp-content/uploads/2018/09/8crypto.png","https://www.interactivebrokers.com/images/web/cryptocurrency-hero.jpg","https://image.cnbcfm.com/api/v1/image/106923510-1628278457539-hand-holding-a-bitcoin-in-front-of-a-computer-screen-with-a-dark-graph_t20_1Q8G0Y.jpg?v=1628278618&w=929&h=523","https://thedial.co/wp-content/uploads/2022/03/crypto.jpeg"];

const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  // console.log(cryptoNews);

  if (!cryptoNews?.value) return <Loader />;
  return (
    <Row gutter={[24,24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news,i)=>(
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
            <a href={news.url} target="_blank" rel="noreferrer">
                <div className='news-image-container'>
                  <Title className='news-title' level={4} > {news.name} </Title>
                  <img src={news?.img?.thumbnail?.contentUrl||demoImage[ Math.floor(Math.random()*demoImage.length) ] } height="70" width="70" alt=""></img>
                </div>
                <p>
                  {news.description>100 ? `${news.description.substring(0,100)}...`
                  : news.description}
                </p>
                <div className='provider-container'>
                  <div>
                      <Avatar src={ news.provider[0]?.image?.thumbnail?.contentUrl || demoImage[ Math.floor(Math.random()*demoImage.length)]} alt=""/>
                      <Text className='provider-name'>{news.provider[0]?.name}</Text>
                  </div>
                      <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </a>

            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default News;