import React, { Component } from "react";

export default class Test extends Component {
    render() {
        return (
            <div>
                hello world
                <p>scoped</p>
                <style jsx>{`
                    p {
                        color: blue;
                    }
                    div {
                        background: red;
                    }
                    @media (max-width: 600px) {
                        div {
                            background: blue;
                        }
                    }
                `}</style>
                <style global jsx>{`
                    body {
                        background: black;
                    }
                `}</style>
            </div>
        )
    }
}