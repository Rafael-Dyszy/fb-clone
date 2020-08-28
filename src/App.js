import React from 'react';
import './App.css';
import Header from './components/pages/Header';
import Sidebar from './components/pages/Sidebar';
import Feed from './components/pages/Feed';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>

      {/* App body */}
    </div>
  );
}

export default App;
