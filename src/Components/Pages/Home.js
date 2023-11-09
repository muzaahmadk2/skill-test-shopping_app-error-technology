import classes from "./Home.module.css";
import Products from "./Products";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.product.products);


    const displayProducts = products.map((pdt) => (
        <Products key={pdt.id} id={pdt.id} image={pdt.image} price={pdt.price} design={pdt.design} title={pdt.title} />
    ))
  return (
    <div className={classes.products}>
      <div className={classes.product_design}>
        <div className={classes.product_nav}>
          <p className={classes.link}>
            <span className={classes.homelink}>Home</span>" / Shop"
          </p>
          <h3 className={classes.title}>Shop</h3>
          <div className={classes.sorting}>
            <p>Showing 1-12 of 36 Results</p>
            <select id="sordingOrder" name="sortingOrder">
              <option value="defaultSorting">Default Sorting</option>
              <option value="newest">Newest</option>
              <option value="ascending">Ascending</option>
            </select>
          </div>
        </div>
      </div>
      <div className={classes.product_container}>
        <div className={classes.product_cards} dir="ltr">
            {displayProducts}
            
        </div>
      </div>
      <div className={classes.related_product}>
        <div className={classes.rheader}>
            <h1>Related Products</h1>
        </div>
        <div className={classes.related_cards}>
            {displayProducts}
        </div>
      </div>
    </div>
  );
};

export default Home;
