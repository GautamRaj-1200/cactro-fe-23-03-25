import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content-container">
        <Home />
      </div>
    </div>
  );
};

export default App;
