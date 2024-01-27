import './App.css';
import LoginPanel from './Components/LoginPanel';
import CatList from './Components/CatList';
import api from './api';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import CatProfile from './Components/CatProfile';
import RegisterPanel from './Components/RegisterPanel';

// try{
//   const response = await api.get('/api/users/');
//   console.log(response);
// }
// catch(e)
// {
// }

  
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ="/" Component={LoginPanel}/>
        <Route path = "/cats/" Component={CatList}/>
        <Route path = "/cats/:id" Component={CatProfile}/>
        <Route path = "/register/" Component={RegisterPanel}/>
        {/* <Route path = "/cats/:id" Component={CatProfile} /> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
