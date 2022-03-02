import './App.css';
import Main from './components/main/Main';
import Users from './components/users/Users';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() : JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}>
        </Route>
        <Route path="/users" element={<Users/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
