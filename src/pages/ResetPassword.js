import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const ResetPassword = () => {
    return (
        <>
            <Meta title={"Şifre Değiştir"} />
            <BreadCrumb title="Şifre Değiştir" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Şifre Değiştir</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Şifre"
                                        className="form-control" />
                                </div>
                                <div className="mt-1">
                                    <input
                                        type="password"
                                        name="confpassword"
                                        placeholder="Şifreyi Onayla"
                                        className="form-control" />
                                </div>
                                <div>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0">Değiştir</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ResetPassword