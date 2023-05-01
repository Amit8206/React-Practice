import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const ads = () => {
    setTimeout(() => {
      setInterval(() => {
        document.title = 'TextUtils Is a Amazing'
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now'
      }, 1500);
    }, 2000);
  }

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'  // #042743(Ocene Blue)  #101048(light blue)    #04044c
      showAlert("Dark Mode Enabled", "success")
      document.title = 'TextUtils | Dark Mode'
      // ads()
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "success")
      document.title = 'TextUtils | Light Mode'
      // ads()
    }
  }





  return (

    <>
   
      {/* <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} /> */}
      {/* <Alert alert={alert} /> */}
      {/* <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} /> */}
      {/* <About /> */}
      <BrowserRouter>
      {ads()}
        <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />}/>
          <Route exact path="/contact" element={<Contact mode={mode} />}/>
          <Route exact path="/about" element={<About mode={mode} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
