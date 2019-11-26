import React, { Component } from "react";
import '../assets/index.less';
export default class Index extends Component {
    componentDidMount() {
        console.log("加载完成")
    }
    render() {
        return (
            <div>
                <div>welcome to next!!!</div>
                <div className='example'>家居</div>
            </div>
        )
    }
}