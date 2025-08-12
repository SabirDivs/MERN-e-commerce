import React from 'react';
import './index.css';
import AppRoutes from './pages/AppRoutes';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
    </div>
  );
};

export default App;