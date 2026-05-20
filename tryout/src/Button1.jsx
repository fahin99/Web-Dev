// import styles from "./Button.module.css"
function Button1(){
    const styles={
        backgroundColor: "#0e3b4d",
        color: "rgb(202, 228, 235)",
        padding: "10px 20px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        boxShadow: "2px 2px 2px",
    }
    return(<button style={styles}>Click me</button>);
}

export default Button1