import React from 'react';
import './App.css';
import Header from './components/pages/Header';
import Sidebar from './components/pages/Sidebar';
import Feed from './components/pages/Feed';
import Widgets from './components/pages/Widgets';
import Login from './components/pages/Login';
import { useStateValue } from './StateProvider';

function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
