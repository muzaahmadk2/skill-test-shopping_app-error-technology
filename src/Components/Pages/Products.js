import classes from "./Products.module.css";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { RiShoppingBagFill } from "react-icons/ri";
import {useNavigate,Link} from 'react-router-dom';

const Products = (props) => {
  
  return (
    <div className={classes.product_card}>
      <div className={classes.header}>
        <Link to={`/shop/${props.id}`}>
          <FaExpandArrowsAlt />
        </Link>
        <Link to='/login'>
          <RiShoppingBagFill />
        </Link>
      </div>
      <div className={classes.image}>
        <div className={classes.design} style={{background:`${props.design}`}}>
          <div className={classes.circle}></div>
        </div>
        <figure>
          <img src={props.image} width={190} height={85} />
        </figure>
      </div>
      <div className={classes.name}>
        <p>{props.title}</p>
        <div className={classes.price}>{props.price}</div>
      </div>
    </div>
  );
};
export default Products;
