import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menu from './pages/Menu';
import Admin from './pages/Admin';
import MenuSearchResult from './pages/MenuSearchResult';
import './App.css';
import BookList from './commons/components/BookList';
import BookDetail from './pages/BookDetail';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path=":id" element={<BookDetail/>}/>
          <Route path='menu'>

            <Route index element={<Menu/>}/>
            <Route path="search" element={<MenuSearchResult/>}/>
          </Route> 
          <Route path="admin">
            <Route index element={<Admin/>}/>
            <Route path="booklist" element={<BookList/>}/>
          </Route>
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
