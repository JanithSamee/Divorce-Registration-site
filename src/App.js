import './App.css';
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import './fonts/Hiragino Mincho ProN W6.otf';
import './fonts/Hiragino Kaku Gothic ProN W3.otf';
import Footer from './Components/Footer';

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
