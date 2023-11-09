import classes from "./Shop.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import Products from "./Products";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dynamicId, setDynamicId] = useState(id ? id: 0);
  const products = useSelector((state) => state.product.products);
  const imagethumbnails = products.filter((pdt) => {
    return pdt.id != dynamicId;
  });
  const displayProducts = products.map((pdt) => (
    <Products
      key={pdt.id}
      id={pdt.id}
      image={pdt.image}
      price={pdt.price}
      design={pdt.design}
      title={pdt.title}
    />
  ));
  const changeImageHandler = (e) => {
    setDynamicId(e.target.id);
  };
  const nextImage = () => {
    const aa= dynamicId+1;
    setDynamicId(aa);
  };
  const prevImage = () => {
    const aa= dynamicId-1;
  }

  return (
    <div className={classes.products}>
      <div className={classes.product_design}>
        <div className={classes.product_nav}>
          <p className={classes.link}>
            <span className={classes.homelink}>Home</span>" / Product Details"
          </p>
          <h3 className={classes.title}>Product Details</h3>

          <div className={classes.prev_next}>
            {dynamicId > 0 ? (
              <div className={classes.left} onClick={prevImage}>
                <IoIosArrowBack />
              </div>
            ) : (
              ""
            )}
            {dynamicId <= 2 ? (
              <div className={classes.right} onClick={nextImage}>
                <IoIosArrowForward />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className={classes.product_detail}>
        <div className={classes.product_card}>
          <div className={classes.card_left}>
            <div className={classes.name}>
              <p>{products[dynamicId].title}</p>
            </div>
            <div className={classes.description}>
              <p>{products[dynamicId].description}</p>
            </div>
            <div className={classes.image_thumbnails}>
              {imagethumbnails.map((pdt) => (
                <div className={classes.image_thumbnail}>
                  <img
                    src={pdt.image}
                    id={pdt.id}
                    width="95"
                    height="40"
                    alt="thumbnails"
                    onClick={changeImageHandler}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={classes.card_middle}>
            <div className={classes.middle_container}>
              <div className={classes.image_gallery}>
                <img
                  src={products[dynamicId].image}
                  width="200"
                  height="90"
                  alt="product-gallery"
                />
              </div>
              <div className={classes.price}>
                <span>${products[dynamicId].price}</span>
              </div>
            </div>
          </div>
          <div className={classes.card_right}>
            <span className={classes.review_heading}>Reviews</span>
            <div className={classes.rating}>
              <span className={classes.star}>
                <AiFillStar />
              </span>
              <span className={classes.star}>
                <AiFillStar />
              </span>
              <span className={classes.star}>
                <AiFillStar />
              </span>
              <span className={classes.star}>
                <BiSolidStarHalf />
              </span>
              <span className={classes.star}>
                <AiOutlineStar />
              </span>
              <span className={classes.count}>3.5 / 5</span>
            </div>
            <div className={classes.product_colors}>
              <span>Select Color:</span>
              <div className={classes.color}>
                <label for="color0">
                  <input
                    type="radio"
                    id="color0"
                    name="color"
                    value="#d5d5d4"
                  />
                  <div
                    className={classes.colors}
                    style={{ background: "rgb(213, 213, 212)" }}
                  ></div>
                </label>
                <label for="color1">
                  <input
                    type="radio"
                    id="color1"
                    name="color"
                    value="#f0969e"
                  />
                  <div
                    className={classes.colors}
                    style={{ background: "rgb(240, 150, 158)" }}
                  ></div>
                </label>
                <label for="color2">
                  <input
                    type="radio"
                    id="color2"
                    name="color"
                    value="#1e1e1e"
                  />
                  <div
                    className={classes.colors}
                    style={{ background: "rgb(30, 30, 30)" }}
                  ></div>
                </label>
                <label for="color3">
                  <input
                    type="radio"
                    id="color3"
                    name="color"
                    value="#cb141a"
                  />
                  <div
                    className={classes.colors}
                    style={{ background: "rgb(203, 20, 26)" }}
                  ></div>
                </label>
              </div>
            </div>
            <div className={classes.product_size}>
              <span>Select Size:</span>
              <div className={classes.sizes}>
                <label for="size0">
                  <input type="radio" id="size0" name="size" value="41" />
                  <div className={classes.size}>41</div>
                </label>
                <label for="size1">
                  <input type="radio" id="size1" name="size" value="42" />
                  <div className={classes.size}>42</div>
                </label>
                <label for="size2">
                  <input type="radio" id="size2" name="size" value="43" />
                  <div className={classes.size}>43</div>
                </label>
                <label for="size3">
                  <input type="radio" id="size3" name="size" value="44" />
                  <div className={classes.size}>44</div>
                </label>
                <label for="size4">
                  <input type="radio" id="size4" name="size" value="45" />
                  <div className={classes.size}>45</div>
                </label>
                <label for="size5">
                  <input type="radio" id="size5" name="size" value="46" />
                  <div className={classes.size}>46</div>
                </label>
                <label for="size6">
                  <input type="radio" id="size6" name="size" value="47" />
                  <div className={classes.size}>47</div>
                </label>
                <label for="size7">
                  <input type="radio" id="size7" name="size" value="48" />
                  <div className={classes.size}>48</div>
                </label>
              </div>
            </div>
            <div className={classes.addto_cart}>
              <button disabled="">Add to cart</button>
            </div>
          </div>
        </div>
        <div className={classes.related_product}>{displayProducts}</div>
      </div>
    </div>
  );
};
export default Shop;
