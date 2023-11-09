import classes from "./Blog.module.css";
import { useSelector } from "react-redux";
import Products from "./Products";

const Blog = () => {
  const products = useSelector((state) => state.product.products);
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

  return (
    <div className={classes.product_container}>
      <div className={classes.product_cards} dir="ltr">
        {displayProducts}
      </div>
    </div>
  );
};
export default Blog;
