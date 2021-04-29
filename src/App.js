import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import FormItem from './pages/FormItem';
import FormEdit from './pages/FormEdit';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App m-5">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create"><FormItem /></Route>
          <Route path="/edit/:id"><FormEdit /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
