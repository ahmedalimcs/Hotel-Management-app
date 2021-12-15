import './App.css';
// import Login from './Form/login';
import AppRouter from './Router';
import Signin from './Form/Signin';
import About from './Component/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import Screen from './Form/Hotel mang/Screen';
import Localstorage from './Storage/localstorage';
import Modal from './Storage/ModalC/Modal';
import {useState} from 'react'


function App() {

  const [show,setshow] = useState(false)
  const state = useSelector((e) => e );
  console.log(state)




  
  return (
    <>
    <div>

      {/* <Login/>
      <AppRouter/> */}
      {/* <Signin/> */}
      <Screen/>
      <AppRouter/>
      <Localstorage/>
      <div className='div'>
      <button onClick={() => setshow(true)}>ShowModal</button>
      </div>
      <Modal show = {show}/>
      

    </div>

    </>
    
  );
}

export default App;
