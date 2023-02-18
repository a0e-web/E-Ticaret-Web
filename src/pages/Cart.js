import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {AiFillDelete} from  "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <BreadCrumb title="Cart" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                <h4 className="cart-col-1">Ürün</h4>
                                <h4 className="cart-col-2">Fiyat</h4>
                                <h4 className="cart-col-3">Adet</h4>
                                <h4 className="cart-col-4">Toplam</h4>
                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img src="../images/watch.jpg" className="img-fluid" alt="product image" />
                                    </div>
                                    <div className="w-75">
                                        <p>AAAadsad</p>
                                        <p>Size: asdad</p>
                                        <p>Color: thy</p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">TL 450</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div>
                                        <input type="number" 
                                        className="form-control" 
                                        min={1} max={10}
                                        name="" id="" />
                                    </div>
                                    <div>
                                        <AiFillDelete className="text-danger" />
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                <h5 className="price">TL 450</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-2">
                            <div className="d-flex justify-content-between align-items-baseline">
                            <Link to="/product" className="button">Alişverişe Devam</Link>
                            <div className="d-flex flex-column align-items-end">
                                <h4>Toplam Fiyat: TL 1000</h4>
                                <p>Vergiler ve Kargo ödemeleri hesaplandi.</p>
                                <Link to='/checkout' className="button">Ödeme</Link>
                            </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Cart;