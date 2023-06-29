import React from 'react';
import { BrowserRouter as router,Switch,Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css'

// we required a lot of imports for diff Components
// so we will import with help of index js file
// Now we can pass many components in same line

 import {Navbar,Exchanges,Homepage,CryptoDetails,Cryptocurrencies,News} from './components'

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
           <Navbar/>
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
              {/*  allow us to have multiple paths*/}
              {/* previously we used switch but after react dom 6 update we use router  */}
            <router>
              <Routes>
                <Route path='/' element={<Homepage/>} />
                <Route path="/exchanges" element={<Exchanges/>}/>
                <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
                <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
                <Route path="/news" element={<News/>}/>
              </Routes>
            </router>
            </div>
          </Layout>
          {/* For now footer is not showing at bottom */}`-`
          <div className='footer' >
            <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
              Crypto-Verse <br/>
              All Rights reserved
            </Typography.Title>
            <Space>
              <Link to="/" className='sp'> Home  </Link>
              <Link to="/exchanges" className='sp'> Exchanges </Link>
              <Link to="/news" className='sp'> News </Link>
            </Space>
          </div>
        </div>
    </div>
  )
}

export default App