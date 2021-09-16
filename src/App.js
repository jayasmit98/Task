import List from './components/list'
import Adddish from './components/adddish'
import Editdist from './components/editdist'
import './css/root.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';


function App() {
  
  return (
    <BrowserRouter> 
      <Switch>
        <div className="App">
          <Route exact path="/">
          <List />
          </Route>
          <Route exact path="/add">
            <List />
            <Adddish />
          </Route>
          <Route exact path="/edit/:id">
            <List />
            <Editdist />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
