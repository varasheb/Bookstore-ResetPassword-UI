import logo from './logo.svg';
import './App.css';
import ResetPassword from './component/ResetPassword';
import { useEffect, useState } from 'react';


function App() {
  const [token, setToken] = useState('your-token-here');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenParam = params.get('token');
    if (tokenParam) {
      setToken(tokenParam);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bookstore</h1>
      </header>
        <ResetPassword  token={token}/>
    </div>
  );
}

export default App;
