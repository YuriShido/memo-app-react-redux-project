import logo from './logo.svg';
import './App.css';
import MemoFile from './component/MemoFile'
import MemoContents from './component/MemoContents'

function App() {
  return (
    <div className="App">
      <h1>Memo</h1>
      <div className="main">

      {/* <h1>Memo app</h1> */}
      <MemoFile />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <MemoContents />
      </div>
    </div>
  );
}

export default App;
