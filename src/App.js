import './App.css';
import LoginPanel from './Components/LoginPanel';
import CatList from './Components/CatList';
import api from './api';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import CatProfile from './Components/CatProfile';
import RegisterPanel from './Components/RegisterPanel';
import AddCatForm from './Components/AddCatForm';
import UpdateCatForm from './Components/UpdateCatForm';
import UserProfile from './Components/UserProfile';

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
        <Route path = "/cats/add/" Component={AddCatForm}/>
        <Route path = "/cats/edit/:id" Component={UpdateCatForm}/>

        <Route path = "/user/profile/:id" Component={UserProfile}/>
        <Route path = "/register/" Component={RegisterPanel}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
