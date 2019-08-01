import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
            <div className="row" >
            <div className="col-10 mx-auto text-uppercase text-center text-title pt-5">
                <h1 className="display-3">404</h1>
                <h1>ошибка</h1>
                <h2>страница не найдена</h2>
                <h3>The requested URL: <span className="text-danger">{this.props.location.pathname} </span>was not found</h3>
            </div>
            </div>
            </div>
        )
    }
}
