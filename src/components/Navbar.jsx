import React from 'react'
import {Button,Typography,Menu,Avatar} from 'antd'; 

import {Link} from 'react-router-dom';
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined, FundOutlined,MenuOutlined} from '@ant-design/icons';

import icon from '../image/123.png';

const Navbar = () => {
  return (
  <div className="nav-container">
    <div className="log-container " id='mylogo'>
        <Avatar src={icon} size="large" style={{width:"50px",height:'50px'}}/>
        <Typography.Title level={2} className="logo">
            <Link to="/"> Cryptoverse</Link>
        </Typography.Title>
    </div>
    <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined/>}>
         <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined/>}>
         <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>}>
         <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>}>
         <Link to="/news">News</Link>
        </Menu.Item>
    </Menu>
    
  </div>
  )
}

export default Navbar
