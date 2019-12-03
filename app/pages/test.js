import React, { Component } from "react";
import Error from 'next/error'
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config'

export default class Test extends Component {

    static async getInitialProps() {
        console.log('发请求')
        const res = await fetch('https://api.github.com/repos/zeit/next.js')
        const statusCode = res.statusCode > 200 ? res.statusCode : false
        const json = await res.json()

        return { statusCode, stars: json.stargazers_count }
    }
    
    render() {
        if (this.props.statusCode) {
            return <Error statusCode={this.props.statusCode} />
        }
        return (
            <div>
                hello world
                <p>scoped</p>
            </div>
        )
    }
}