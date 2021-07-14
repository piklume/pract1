import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import UserList from './components/user-list/user-list.component';
import PostList from './components/post-list/post-list.component';
import Header from './components/Header/header.component';
import UserPage from './components/user-page/user-page.component';

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {
        (pathname === '/') ? null : <Header />
      }
      <header className="App-header"> 
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/users' component={UserList} />
          <Route path='/posts' component={PostList} />
          <Route path='/userpage' component={UserPage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
