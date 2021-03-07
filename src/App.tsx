import {Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Resume from "./components/Resume";

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/resume" component={Resume}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
