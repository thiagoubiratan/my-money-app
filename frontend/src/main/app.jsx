import '../common/template/dependencies';
import React from 'react';

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Router from './routes'

export default props => (
    <div className='wrapper'>
        <Header></Header>
        <SideBar></SideBar>
        <div className='content-wrapper'>
            <Router></Router>
        </div>
        <Footer></Footer>
    </div>
)