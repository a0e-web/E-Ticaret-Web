import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";
import Meta from "../components/Meta";

const CompareProduct = () => {
    return (
        <>
            <Meta title={"Ürün Karşilaştir"} />
            <BreadCrumb title="Ürün Karşilaştir" />
            <Container class1="compare-product-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="cross"
                                    className="position-absolute cross img-fluid" />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">Honor T1 7.0 1GB RAM 8GB ROM 7 Inc Tablet</h5>
                                    <h6 className="price mb-3 mt-3">TL 750</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Marka:</h5>
                                            <p>Honor</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Tip:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Bulunma:</h5>
                                            <p>Stokta</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Renk:</h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Boyut:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="cross"
                                    className="position-absolute cross img-fluid" />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">Honor T1 7.0 1GB RAM 8GB ROM 7 Inc Tablet</h5>
                                    <h6 className="price mb-3 mt-3">TL 750</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Marka:</h5>
                                            <p>Honor</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Tip:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Bulunma:</h5>
                                            <p>Stokta</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Renk:</h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Boyut:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default CompareProduct