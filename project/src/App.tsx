import './App.css';
import Main from './components/main/main';
import Users from './components/users/users';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from './utils/const';


function App() : JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main/>}>
        </Route>
        <Route path={AppRoute.Users} element={<Users/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
