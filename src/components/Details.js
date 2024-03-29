import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, title, info, price, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* endtitle */}
                            { /* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Модель: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Производитель:
                                        <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className ="text-blue">
                                        <strong>
                                            Цена: <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">Информация о продукте:</p>
                                    <p className ="text-muted lead">{info}</p>
                                    {/* buttons */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>Вернуться к продукции</ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                            >
                                            {inCart ? "в корзине" : "добавить в корзину"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
