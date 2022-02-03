import './App.css';
import DataImg from './components/DataImg';
import ImgComp from './components/ImgComp';
import NavComponent from './components/NavComponent';

function App() {

  return (

    <div>
    <NavComponent />
    <h1 id='title1' style={{backgroundColor:"red",padding:"5px"}}>ws-jsx</h1>
    <h2 className='body1' style={{backgroundColor:"olive"}}>go my code</h2>
    <ImgComp />
    <DataImg />
    <footer>phone number : 202020202 </footer>
    </div>
  );
}

export default App;
