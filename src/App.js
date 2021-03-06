import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Header} from "./components/header/header";
import {Home} from "./pages/home/home";
import {Login} from "./pages/login/login";
import {Signup} from "./pages/signup/signup.js"
import {Leaderboard} from "./pages/leaderboard/leaderboard";
import {List} from "./pages/list/list";
import {Test} from "./pages/test/test";

function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/list" component={List} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
