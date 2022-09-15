
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {
    Chart as ChartJS,
    registerables,
  } from 'chart.js';
  ChartJS.register(...registerables);
const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  // console.log(coinHistory?.data?.history?.length);
var n=coinHistory?.data?.history?.length;
  for (let i =n-1; i >=0; i --) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp*1000).toLocaleDateString());
  }

  
  
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
      
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      y: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change"style={{color:'red'}}>Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price" style={{color:'red'}}>Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
