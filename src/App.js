import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  });

  setTimeout(()=>{
    setAlert(null);
  },2000);

}

  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled', 'success');
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar name='AshuTech' mode={mode}  toggleMode={togglemode}/>
    <Alert alert={alert}/>
<div className='container my-3'>
  <Routes>
    <Route exact path='/about' element={<About/>}></Route>
    <Route exact path='/' element={<TextForm text='Enter text here' heading='Text Area' mode={mode} showAlert={showAlert}/>}></Route>
  </Routes>

</div>
    
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
