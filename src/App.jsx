import "./App.css";
import Banner from "./components/Banner";
import Books from "./components/Books";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Writers from "./components/Writers";

function App() {
  
  return (
   <div>
    <Header/>
    <Books/>
    <Banner/>
    <Books/>
    <Writers/>
    <Footer/>
   </div>
  )
}

export default App
