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


import compImage from './assets/components.png';
import Header from './components/Header';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import CoreConcepts from './components/CoreConcepts';
import TabButton from './components/TabButton';
import { use, useState } from 'react';


function App() {
    type ExampleKey = keyof typeof EXAMPLES;
    let tabContent = <p>Please select a topic</p>;

    const [selectedTopic, setSelectedTopic] = useState<ExampleKey | null>(null);
    function handleClick(value: ExampleKey) {
        setSelectedTopic(value);
    }

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    } 
   return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => <CoreConcepts {...concept} key={concept.title}/> )}
            {/* <CoreConcepts title={CORE_CONCEPTS[0].title } 
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}/>
            <CoreConcepts title={CORE_CONCEPTS[1].title } 
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}/>
            <CoreConcepts title={CORE_CONCEPTS[2].title } 
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}/>
           <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
            {/* <CoreConcepts title="Core Concepts" 
            description="Lorem"
            image={compImage}/> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected={selectedTopic === 'Components'}
            onSelect={() => handleClick('Components') }>Components</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'Tsx'}
            onSelect={() => handleClick('Tsx')}>Tsx</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'Props'}
            onSelect={() => handleClick('Props')}>Props</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'React'}
            onSelect={() => handleClick('React')}>React</TabButton>
          </menu>
        </section>
       {/* {!selectedTopic ? <p>Please select a topic</p> : <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>} */}
      {tabContent}
      </main>
    </div>
  );
}

export default App;
