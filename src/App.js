import AboutMe from "./component/AboutMe";
import Banner from "./component/Banner";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";
import Header from "./component/Header";
import MySkill from "./component/MySkill";
import Service from "./component/Services";
import Hey from './images/banner.jpg';

function App() {
  return (
    <div className="App">
     <div style={{backgroundImage:`url(${Hey})`,backgroundSize:'cover',backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"}}>
      <Header />
      <Banner />
      </div>
      <AboutMe />
      <Service />
      <MySkill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
