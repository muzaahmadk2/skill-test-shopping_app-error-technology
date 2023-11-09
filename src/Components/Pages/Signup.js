import {FaEyeSlash} from 'react-icons/fa'
import classes from "./Signup.module.css";

const Signup =()=>{

    const suubmitHandler=(event)=>{
        event.preventDefault();
    }
    return<div className={classes.login_wrapper}>
    <div>
      {" "}
      <form className={classes.background} onSubmit={suubmitHandler}>
        <h2>Sign Up</h2>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="abc@example.com"
          required=""
          value=""
        />
        <label for="password">Password:</label>
        {/* <div className={classes.eye}> */}
          <input
            type="password"
            id="password"
            name="password"
            required=""
            value=""
          />
          {/* <FaEyeSlash/>
        </div> */}
        <label for="password">Confirm Password:</label>
        <div className={classes.eye}>
          <input
            type="password"
            id="password"
            name="password"
            required=""
            value=""
          />
          <span className={classes.eye_slash}><FaEyeSlash/></span>
        </div>
        <button className={classes.login} type="submit" disabled="">
          Sign Up
        </button>
      </form>
    </div>
  </div>
}
export default Signup;