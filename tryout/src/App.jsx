import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Button1 from "./Button1.jsx";
import Student from "./Student.jsx";
import Greeting from "./Greeting.jsx";
function App() {
  return(
    <>
      <Header/>
      {/* <Food/>
      <Card/>
      <Button/> */}
      <Greeting name="Brown" isLoggedIn={true}/>
      <Student name="Brown" age={10} isStudent={true}/>
      <Greeting/>
      <p/>
      <Button1/>
      <Footer/>
    </>
  );
}

export default App
