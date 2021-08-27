
import './App.css';
import MemoTop from './component/MemoTop'
// import MemoFile from './component/MemoFile'
// import MemoContents from './component/MemoContents'
// import Header from './component/Header'
import MemoCard from './component/MemoCard'

import { BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MemoTop} />
          <Route path="/card" component={MemoCard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
