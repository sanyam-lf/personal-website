import React from 'react';
import './App.css';
import './App.scss';

function App() {
  const handleConnectNowClick = () => {
    window.location.href = 'https://calendly.com/sanyamnahta/30min';
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Sanyam Nahta</h1>
        <button className="connect-now-btn" onClick={handleConnectNowClick}>
          Connect with sanyam now
        </button>
      </header>
    </div>
  );
}

export default App;
