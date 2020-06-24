import React, { Component } from 'react'
import Head from 'next/head';
import Header from '../components/Header';
// import { getData } from '../utils/fetch';


export default class extends Component {
    componentDidMount() {
        // getData('/api2/j/search_subjects?',
        //     { type: 'movie', tag: '热门', page_limit: 50, page_start: 0 }
        // ).then(function (myJson) {
        //     console.log(myJson);
        // });
    }
    render() {
        return (
            <div>
                <Head>列表界面</Head>
                <meta name="viewport" content="initial-scale" width="device-width" key='list'></meta>
                <Header />
                <h3> 列表界面</h3>
                
            </div >
        )
    }
} 