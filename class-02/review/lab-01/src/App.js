import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Cow from './images/cows.jpg';
import Goat from './images/moutainlion.jpg'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <img src={Cow} alt='cow' height={200} width={200}/> */}
      <Main img={Cow} title="Horned Beast" website="https://www.pexels.com/search/animals%20with%20horns/" description="This is a picture of a horned Beast!" />
      {/* <img src={Goat} alt='goat'height={200} width={200}/> */}
      <Main img={Goat} title="Another Horned Beast" website="https://www.pexels.com/search/animals%20with%20horns/" description="this is a goat!!" />
      <Footer />
    </div>
  );
}
export default App;
