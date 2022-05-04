import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Main from './Component/Main/Main';

function App() {
  return (
    <>
      <ToastContainer />
      <Main />
    </>
  );
}

export default App;
