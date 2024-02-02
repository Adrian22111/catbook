import './App.css';
import LoginPanel from './Components/LoginPanel';
import CatList from './Components/CatList';
import { BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom';
import CatProfile from './Components/CatProfile';
import RegisterPanel from './Components/RegisterPanel';
import AddCatForm from './Components/AddCatForm';
import UpdateCatForm from './Components/UpdateCatForm';
import UserProfile from './Components/UserProfile';
import UserEditForm from './Components/UserEditForm';
import AddBreed from './Components/AddBreed';
import EditBreed from './Components/EditBreed';
import AuthContext from './context/AuthProvider';
import { useContext } from 'react';
import Cookies from 'universal-cookie';


  
function App() {
  const { auth } = useContext(AuthContext);
  const cookies = new Cookies();
  const authCookieSet = cookies.get('jwt_authorization');
  console.log(auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(auth.accessToken || authCookieSet) ? <Navigate to="/cats" /> : <LoginPanel />}
        />
        <Route path="/register" element={<RegisterPanel />} />
        <Route
          path="/cats/*"
          element={(auth.accessToken || authCookieSet) ? <CatList /> : <Navigate to="/" />}
        />
        <Route path="/cats/:id" element={auth.accessToken ? <CatProfile /> : <Navigate to="/" />} />
        <Route
          path="/cats/add"
          element={(auth.accessToken || authCookieSet) ? <AddCatForm /> : <Navigate to="/" />}
        />
        <Route
          path="/cats/edit/:id"
          element={(auth.accessToken || authCookieSet)? <UpdateCatForm /> : <Navigate to="/" />}
        />
        <Route
          path="/user/profile/:id"
          element={(auth.accessToken || authCookieSet)? <UserProfile /> : <Navigate to="/" />}
        />
        <Route
          path="/user/edit/:id"
          element={(auth.accessToken || authCookieSet)? <UserEditForm /> : <Navigate to="/" />}
        />
        <Route
          path="/breed/add"
          element={(auth.accessToken || authCookieSet)? <AddBreed /> : <Navigate to="/" />}
        />
        <Route
          path="/breed/edit/:id"
          element={(auth.accessToken || authCookieSet)? <EditBreed /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
