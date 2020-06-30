/**
 * @description 首页
 * @author yunfei
 * @time 2020/6/24
 */
import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '../styles/common.css';

//楼层配置
const params = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
}
export default class extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div className="container">
                <Head>
                    <title>首页</title>
                    <meta name="viewport" content="initial-scale" width="device-width"></meta>
                    <style>
                        {
                            `   
                                .container{
                                    position: relative;
                                    display: flex;
                                    flex: 1;
                                    flex-direction: column;
                                    box-sizing: border-box;
                                    background:rgb(84, 86, 82);            
                                }
                                .swiper-container{width:100%;height:100%;}
                                .banner1{ background:url(static/image/index/1.jpg); }
                                .banner2{ background:url(static/image/index/2.jpg); }
                                .banner3{ background:url(static/image/index/3.jpg); }
                                .banner4{ background:url(static/image/index/4.jpg); }
                                .banner{
                                    height:100%;
                                    background-size: cover;
                                    background-repeat: no-repeat;
                                    background-position: center;
                                }
                            `
                        }

                    </style>
                </Head>
                <Header />
                <Swiper {...params}>
                    <div className='banner banner1'></div>
                    <div className='banner banner2'></div>
                    <div className='banner banner3'></div>
                    <div className='banner banner4'></div>
                </Swiper>
            </div>
        )
    }
}