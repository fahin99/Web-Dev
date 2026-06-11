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
        display: "block",
        margin: "0 auto",
    }
    const handleClick = () => console.log("Clicked!!");
    // const handleClick2
    return(<button style={styles} onClick={handleClick}>Click me</button>);
}

export default Button1