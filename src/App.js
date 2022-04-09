import './App.css';
import FirstPage from './Components/FirstSection/FirstPage';
import SecondPage from './Components/SecondSection/SecondPage';
import './fonts/Hiragino Mincho ProN W6.otf';
import './fonts/Hiragino Kaku Gothic ProN W3.otf';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <FirstPage />
      <SecondPage />
      <Footer />
    </div>
  );
}

export default App;
