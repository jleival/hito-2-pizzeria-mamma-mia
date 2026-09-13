import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-vh-100 d-flex flex-column'>
      <Navbar />
      <div className='flex-grow-1'>
        {/* Tips del Hito 2: Comenta o descomenta según la vista que quieras mostrar */}
        {/* <Home /> */}
        <Register />
        {/* <Login /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;