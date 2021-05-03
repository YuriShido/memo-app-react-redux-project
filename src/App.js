
import './App.css';
import MemoFile from './component/MemoFile'
import MemoContents from './component/MemoContents'
import Header from './component/Header'

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Memo</h1>
      <Header />

      <div className="main">
      <MemoFile />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <MemoContents />
      </div>
    </div>
  );
}

export default App;
