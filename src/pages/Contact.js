import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaHome } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { GoInfo } from "react-icons/go";

const Contact = () => {
  return (
    <>
      <Meta title={"Iletişim"} />
      <BreadCrumb title="Iletişim" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.016863891721!2d32.86403371518496!3d40.008070879414625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34d17981a6c35%3A0x9031ec8daef64449!2zVXlhbsSxxZ8sIDExMTkuIFNrLiBObzoxLCAwNjMwMCBLZcOnacO2cmVuL0Fua2FyYQ!5e0!3m2!1str!2str!4v1673530607087!5m2!1str!2str"
                width="600" height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Iletişim</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="İsim" />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Tel Numarasi" />
                    </div>
                    <div>
                      <textarea
                        name="" id=""
                        className="w-100 form-control"
                        cols="30" rows="4"
                        placeholder="Yorum"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Gönder</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Bizimle temasa geçin</h3>
<div>
  <ul className="ps-0">
    <li className="mb-3 d-flex gap-15 align-items-center">
      <FaHome className="fs-5" />
      <address className="mb-0">Ankara/Keçiören, Uyaniş, 1119. Sk. No:1, 06300 </address>
      </li>
    <li className="mb-3 d-flex gap-15 align-items-center">
      <BiPhoneCall className="fs-5" />
      <a href="tel:+312 580 3663">+312 580 3663</a>
    </li>
    <li className="mb-3 d-flex gap-15 align-items-center">
      <FiMail className="fs-5" />
      <a href="mailto:almaliyim@gmail.com">almaliyim@gmail.com</a>
    </li>
    <li className="mb-3 d-flex gap-15 align-items-center">
      <GoInfo className="fs-5" />
      <p className="mb-0">Pazartesi - Cuma 09:00 - 18:00</p>
    </li>
  </ul>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact