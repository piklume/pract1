import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import UserListPage from './components/user-list-page/user-list-page.component';
import PostListPage from './components/post-list-page/post-list-page.components';
import Header from './components/Header/header.component';
import UserPagePage from './components/user-page-page/user-page-page.component';
// import UserPageContainer from './components/user-page/user-page.container';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

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
          <Route path='/users' component={UserListPage} />
          <Route path='/posts' component={PostListPage} />
          <Route path='/userpage' component={UserPagePage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
