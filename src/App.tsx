// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo " alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + Reactzz</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more tests
//       </p>
//     </>
//   )
// }

// export default App

import Header from './components/Header';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { Fragment, useState } from 'react';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

function App() {
     
   return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples/>
      </main>
    </>
  );
}

export default App;
