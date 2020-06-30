/**
 * description:列表
 * author:yunfei
 * time:2020/6/23
 */
import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import { Input } from 'antd';
import Header from '../components/Header';
import { getData } from '../utils/fetch';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '../styles/common.css';

//搜索
const { Search } = Input;
// 轮播配置
const params = {
    effect: 'coverflow',
    grabCursor: true,
    initialSlide: 1,
    centeredSlides: true,
    slidesPerView: '4',
    updateOnWindowResize: true,
    shouldSwiperUpdate: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
    },
    pagination: {
        el: '.yf_cover_pagin'
    }
}
// 电影类型
const filmArr = ["热门", "最新", "豆瓣高分", "冷门佳片", "华语", "欧美", "韩国", "日本"];

export default () => {
    const [list, setList] = useState([
        { "rate": "6.5", "cover_x": 4800, "title": "想哭的我戴上了猫的面具", "url": "https:\/\/movie.douban.com\/subject\/34964061\/", "playable": true, "cover": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2609399538.jpg", "id": "34964061", "cover_y": 7600, "is_new": false },
        { "rate": "6.9", "cover_x": 2000, "title": "侵入者", "url": "https:\/\/movie.douban.com\/subject\/34845342\/", "playable": false, "cover": "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2608495324.jpg", "id": "34845342", "cover_y": 2860, "is_new": true },
        { "rate": "6.5", "cover_x": 1382, "title": "罪证子弹", "url": "https:\/\/movie.douban.com\/subject\/35086930\/", "playable": false, "cover": "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2606913994.jpg", "id": "35086930", "cover_y": 2048, "is_new": true },
        { "rate": "6.6", "cover_x": 2001, "title": "放射性物质", "url": "https:\/\/movie.douban.com\/subject\/26979354\/", "playable": false, "cover": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2584122961.jpg", "id": "26979354", "cover_y": 2937, "is_new": true },
        { "rate": "5.3", "cover_x": 1505, "title": "午夜0时的吻", "url": "https:\/\/movie.douban.com\/subject\/30488584\/", "playable": false, "cover": "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2563038544.jpg", "id": "30488584", "cover_y": 2130, "is_new": false },
        { "rate": "8.5", "cover_x": 1944, "title": "黑水", "url": "https:\/\/movie.douban.com\/subject\/30331959\/", "playable": false, "cover": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2569450232.jpg", "id": "30331959", "cover_y": 2880, "is_new": false },
        { "rate": "7.2", "cover_x": 736, "title": "翻译疑云", "url": "https:\/\/movie.douban.com\/subject\/30145117\/", "playable": false, "cover": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2580137248.jpg", "id": "30145117", "cover_y": 1000, "is_new": false },
        { "rate": "8.0", "cover_x": 1452, "title": "默片解说员", "url": "https:\/\/movie.douban.com\/subject\/30135942\/", "playable": false, "cover": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2571079312.jpg", "id": "30135942", "cover_y": 2048, "is_new": false },
        { "rate": "7.7", "cover_x": 1429, "title": "误杀", "url": "https:\/\/movie.douban.com\/subject\/30176393\/", "playable": true, "cover": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2576090251.jpg", "id": "30176393", "cover_y": 2000, "is_new": false },
        { "rate": "8.7", "cover_x": 600, "title": "给我翅膀", "url": "https:\/\/movie.douban.com\/subject\/30410114\/", "playable": false, "cover": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2561160802.jpg", "id": "30410114", "cover_y": 800, "is_new": false }
    ]);
    const [tag, setTag] = useState('热门')
    useEffect(() => {
        getFilmList(tag);
    }, [tag])
    // 加载电影
    const getFilmList = (tag) => {
        getData('/api2/j/search_subjects?',
            { type: 'movie', tag, page_limit: 10, page_start: 0 }
        ).then(function (myJson) {
            setList(myJson.subjects)
        });
    }
    return (
        <div style={stylesShell.bgmap}>
            <Head>
                <title>列表界面</title>
                <meta name="referrer" content="no-referrer" />
                <meta name="viewport" content="initial-scale" width="device-width" key='list'></meta>
                <style>
                    {
                        `
                            body{overflow: hidden;}
                            /* 搜索 */
                            .search_box{width: 100%; padding: 20px 0; display: flex; flex-direction: row;background: rgba(240, 243, 245, 0.9);}
                            .search_box_l{width: 150px; line-height: 30px; font-size: 18px; text-indent: 9px; color: #1890ff; letter-spacing: 5px;}
                            /* 导航 */
                            .nav_box{background:rgba(250,250,250,0.7);color:#000;padding: 7px 10px;margin-bottom:10px;font-size:13px;}
                            .nav_box span{margin-left:10px;cursor: pointer;padding:0 3px;color:#676565;}
                            .nav_box span:hover{background:#37a;color:#fff}
                            .nav_box .nav_active{color:#000;}
                            /* 电影 */
                            .cover_img{display:block;margin:auto;width:185px;}
                            .cover_descri{margin:auto;padding:5px 0;width:185px;color:#37a;font-size:13px;text-align:center;background: #fff;}
                            .cover_descri span{padding:2px;background:#63c150;color:#fff;margin-right:3px;}
                            .cover_descri strong{margin-left:3px;color:#e09015;}
                            .yf_cover_pagin {text-align:center;}
                        `
                    }
                </style>
            </Head>
            <Header />
            <div style={{
                margin: 'auto',
                width: '800px',
                height: '480px'
            }}>
                <div className='search_box'>
                    <strong className='search_box_l'>搜搜电影</strong>
                    <div style={{ flex: 1, paddingRight: "5px" }}>
                        <Search placeholder="输入电影名" onSearch={value => console.log(value)} enterButton />
                    </div>
                </div>
                <div className='nav_box'>
                    <strong>最近热门电影</strong>
                    {
                        filmArr.map(e => (<span className={tag == e ? 'nav_active' : ''} key={e} onClick={() => setTag(e)}>{e}</span>))
                    }
                </div>
                <Swiper {...params}>
                    {
                        list.map(e => (
                            <div key={e.id}>
                                <a href={e.url} target="__blank">
                                    <img align="center" className='cover_img' src={e.cover}></img>
                                    <p className='cover_descri'>
                                        {e.is_new && (<span>新</span>)}
                                        {e.title}
                                        <strong>{e.rate}</strong>
                                    </p>
                                </a>
                            </div>
                        ))
                    }
                </Swiper>
            </div>
        </div >
    )
}
// 样式集
const stylesShell = {
    bgmap: {
        display: "flex",
        flex: 1,
        flexDirection: 'column',
        background: 'url(static/image/list/listbg.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center"
    }
}