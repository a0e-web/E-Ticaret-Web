import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dinamik Blog Adi"} />
            <BreadCrumb title="Dinamik Blog Adi" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to="/blog" className="d-flex align-items-center gap-10">
                                <BiArrowBack className="fs-4" /> Bloglara Geri Dön
                            </Link>
                            <h3 className="title">Güzel bir pazar sabahina uyanmak.</h3>
                            <img src="/images/blog-1.jpg" className="img-fluid w-100 my-4" alt="blog" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum ex libero facilis suscipit fugiat tenetur officiis odit tempora atque!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis facere iusto inventore in asperiores illum repellat eligendi atque porro tempora? Pariatur, iusto dolore vitae eaque fuga doloremque eum quas adipisci?
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleBlog