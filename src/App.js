import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';


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
      document.body.style.backgroundColor = '#101048'  // #042743(Ocene Blue)  #101048(light blue)
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
      {ads()}
      <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
