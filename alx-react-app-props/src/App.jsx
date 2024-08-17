import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserContext from './components/UserContext'; // Import UserContext

function App() {
  const [count, setCount] = useState(0);
  const userData = { name: "Alice", age: "25", bio: "Loves hiking and photography" }; // Move user data to context

  return (
    <UserContext.Provider value={userData}> {/* Wrap components with UserContext */}
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>

        <WelcomeMessage />

        <div>
          <Header />
          <MainContent />
          <UserProfile /> {/* Remove props and use Context instead */}
          <Footer />
        </div>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    </UserContext.Provider>
  );
}

export default App;
