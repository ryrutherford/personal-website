import {Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Resume from "./components/Resume";
import About from './components/About';

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/about" component={About}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
