import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from "./screens/Home";
import CotacaoScreen from "./screens/CotacaoScreen";
import CotacaoFornecedorScreen from "./screens/CotacaoFornecedorScreen";
import CotacaoAbert from "./screens/CotacaoAbert";

function App() {
  return (
    <Router>
    <Switch>
          <Route path="/cotacao">
            <CotacaoScreen />
          </Route>
          <Route path="/cotacaoabert">
            <CotacaoAbert />
          </Route>
          <Route path="/cotacaoFornecedor/:id">
            <CotacaoFornecedorScreen />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch></Router>
  );
}

export default App;
