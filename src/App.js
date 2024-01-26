import './App.css';
import LoginPanel from './Components/LoginPanel';
import api from './api';

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
    <>
      <LoginPanel/>
    </>
  );
}

export default App;
