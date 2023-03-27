import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent content="Bottone a caso" bgColor="green"/>
        <ImageComponent src="https://picsum.photos/200" alt="Immagine a caso"/>
      </header>
    </div>
  );
}

export default App;
