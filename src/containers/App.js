import logo from '../assets/statics/logo.svg';
import '../assets/css/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
