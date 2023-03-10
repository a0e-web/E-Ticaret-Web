import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Parolanizi mi unuttunuz?"} />
            <BreadCrumb title="Parolanizi mi unuttunuz?" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
               <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Parolanizi Sifirlayin</h3>
                            <p className="text-center mt-2 mb-3">
                              Parolanizi sifirlamak için size bir e-posta göndereceğiz.
                              </p>
                            <form action="" className="d-flex flex-column gap-15">
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control" />
                                </div>
                                <div>
                                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                                        <button className="button border-0">Gönder</button>
                                        <Link to="/login">Geri</Link>
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

export default Forgotpassword;