/**
 * @description 首页
 * @author yunfei
 * @time 2020/6/24
 */
import React, { Component } from 'react';
import Head from 'next/head';
import { Carousel } from 'antd';
import '../styles/index.less';
import '../styles/index.css';

export default class extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <Head>
                    <title>首页</title>
                    <meta name="viewport" content="initial-scale" width="device-width"></meta>
                </Head>
                <style>
                    {
                        `
                        #__next{height:100%;}
                        .banner1{ background:url(static/image/1.jpg); }
                        .banner2{ background:url(static/image/2.jpg); }
                        .banner3{ background:url(static/image/3.jpg); }
                        .banner4{ background:url(static/image/4.jpg); }
                        .banner{
                            height:100%;
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: center;
                        }
                        
                        `
                    }

                </style>
                <div className='banner banner1'>

                </div>
            </div>
        )
    }
}