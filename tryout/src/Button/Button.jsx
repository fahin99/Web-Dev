import styles from "./Button.module.css"
function Button(){
    // const handleClick= () => console.log("CLICKED!!");

    // let count=0;
    // const handleClick2= (name) => {
    //     if(count<5){
    //         count++;
    //         console.log(`${name} u clicked me ${count} times`);
    //     }
    //     else console.log("Bro stop clicking me");
    // }
    // return(<button className={styles.btn} onClick={() => handleClick2("ABRA")}>Click me</button>);

    const handleClick = (e) => e.target.textContent = "OUCH!!";
    return(<button className={styles.btn} onClick={(e) => handleClick(e)}>Click me</button>);
}

export default Button