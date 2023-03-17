import logo from './logo.svg';
import './App.css';
import MyButton from './componets/MyButton';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer'




const App = () => {
  const navHeading = "Navigation Bar";
  const navText = "Sosmed";

  const clicked = () => {
    return alert("button di pencet");
  }

  const paragraf = () =>{
    return (
      <div>
      <h3>mantap bang</h3>
      <i>horee</i>
      <marquee>Top Markotop</marquee>
      </div>
    )
  };


  return (
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText} navHeading={navHeading}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Broo
        </p>
        <MyButton clicked={clicked}/>
        <Footer paragraf={paragraf}/>
      </header>
    </div>
  );
}

export default App;
