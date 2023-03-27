import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent content="Bottone a caso" bgColor="rgb(50,215,150)" color="rgb(240,23,23)" padding="20px" border="3px solid white" margin="20px" radius="10px" size="40px" position="absolute" right="1px"/>
        <ImageComponent src="https://picsum.photos/200" alt="Immagine a caso"/>
      </header>
    </div>
  );
}

export default App;    
