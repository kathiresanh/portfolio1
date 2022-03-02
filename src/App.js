import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Topbar from './Topbar';
import Home from './Home';
import Skills from './Skills';
import Contacts from './Contact';


function App() {
  return (
   <BrowserRouter>
    <div className="container-fluid">
    <Topbar></Topbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/skills' element={<Skills></Skills>}></Route>
      <Route path='/contacts' element={<Contacts></Contacts>}></Route>
    </Routes>
   <Skills></Skills>
   <Contacts></Contacts>
  
    </div>

   </BrowserRouter>
  );
}

export default App;
