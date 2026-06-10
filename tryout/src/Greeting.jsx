import PropTypes from "prop-types";
function Greeting(props){
    // return(
    //     props.isLoggedIn ? <h2 className="wc_msg">Welcome, {props.name}</h2>:
    //                        <h2 className="login_prompt">Kindly login first</h2>
    // );     

    // if(props.isLoggedIn) return(<h2 className="wc_msg">Welcome, {props.name}</h2>);
    // else return(<h2 className="login_prompt">Kindly login first</h2>);

    const wc_msg=<h2 className="wc_msg">Welcome, {props.name}</h2>
    const login_prompt=<h2 className="login_prompt">Kindly login first, {name}</h2>
    return(props.isLoggedIn ? wc_msg : login_prompt);
}

Greeting.propYype={
    isLoggedIn: PropTypes.bool,
    name: PropTypes.string,
}
Greeting.defaultProps={
    isLoggedIn: false,
    name: "Guest",
}
export default Greeting;