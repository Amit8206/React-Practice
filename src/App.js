import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <TextForm heading="Enter the text to Analyze" />
    </>
  );
}

export default App;
