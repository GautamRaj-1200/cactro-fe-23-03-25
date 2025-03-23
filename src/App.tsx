import CookieModal from './components/cookieModal/CookieModal';
import Logos from './components/logos/Logos';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content-container">
        <Home />
        <Logos />
      </div>
      <CookieModal />
    </div>
  );
};

export default App;
