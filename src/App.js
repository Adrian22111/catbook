import './App.css';
import LoginPanel from './Components/LoginPanel';
import CatList from './Components/CatList';
import api from './api';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';

// try{
//   const response = await api.get('/api/users/');
//   console.log(response);
// }
// catch(e)
// {
//   console.log(e);
// }


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ="/" Component={LoginPanel}/>
        <Route path = "/cats/" Component={CatList}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
