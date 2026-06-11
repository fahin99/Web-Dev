import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Button1 from "./Button1.jsx";
import Student from "./Student.jsx";
import Greeting from "./Greeting.jsx";
import List from "./List.jsx";
function App() {
  return(
    <div className="app_desc">
      <Header/>
      {/* <Food/>
      <Card/>
      <Button/> */}
      <List/>
      <Greeting name="Brown" isLoggedIn={true}/>
      <Student name="Brown" age={10} isStudent={true}/>
      <Greeting/>
      <p/>
      <Button/>
      <Footer/>
    </div>
  );
}

export default App
