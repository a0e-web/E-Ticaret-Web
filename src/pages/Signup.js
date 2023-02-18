import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import CustomInput from "../components/CustomInput";

const Signup = () => {
    return (
        <>
            <Meta title={"Kaydol"} />
            <BreadCrumb title="Kaydol" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Kaydol</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="İsim"
                                        className="form-control" />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Telefon Num"
                                        className="form-control" />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control" />
                                </div>
                                <div className="mt-1">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Şifre"
                                        className="form-control" />
                                </div>
                                <div>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0">Kayit Ol</button>
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

export default Signup;