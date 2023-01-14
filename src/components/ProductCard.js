import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product image" />
            <img src="images/watch3.png" className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">JB</h6>
            <h5 className="product-title">
              Öğrenciler için çok renkli çocuk kulakliklari 10'lu renk paketi
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              JBL Tune 510BT Multi Connect kablosuz kulaklik Pure Bass sesi, yumuşacik ve rahat yastiklari, ideal tasarimi ve güçlü Bluetooth 5.0 bağlanti akişi ile burada karşinizda. Siz de gün içinde eller serbest sesli ya da görüntülü görüşme deneyimi yaşamak ve müziği en kaliteli seslerle hissetmek istiyorsaniz alabilirsiniz.
            </p>
            <p className="price">TL200.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product image" />
            <img src="images/watch3.png" className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">JB</h6>
            <h5 className="product-title">
              Öğrenciler için çok renkli çocuk kulakliklari 10'lu renk paketi
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              JBL Tune 510BT Multi Connect kablosuz kulaklik Pure Bass sesi, yumuşacik ve rahat yastiklari, ideal tasarimi ve güçlü Bluetooth 5.0 bağlanti akişi ile burada karşinizda. Siz de gün içinde eller serbest sesli ya da görüntülü görüşme deneyimi yaşamak ve müziği en kaliteli seslerle hissetmek istiyorsaniz alabilirsiniz.
            </p>
            <p className="price">TL200.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard