import logo from './logo.svg';
import IngredientsSelector from './IngredientsSelector';
import Scanner from './Scanner';
import React, { useState } from 'react';

function Header({prompt,other, onButtonClick}) {

  return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      { 1 === 2 ? "Hello" : "Goodbye"} <code>src/App.js</code> and save to .
    </p>
    <a
      className="App-link"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onButtonClick}
    >
      {prompt} {other}
    </a>
  </header>;
}


function Conditions({conditions,onConditionClicked}) {
  return(<>
    <div><input type="checkbox" onChange={(e) => onConditionClicked("IBS")} checked={conditions.ibs} />IBS</div>
    <div><input type="checkbox" onChange={(e) =>  onConditionClicked("ECZEMA") } checked={conditions.eczema} />eczema</div>
  </>)
}

// function App() {
//   return (
//     <div>
//       <IngredientsSelector />
//       <Scanner onDetected={(value) => {
//        alert(value)
//       }} />
//     </div>
//   );



function App() {
  const [currentView, setCurrentView] = useState('ingredients');

  const showScanner = () => {
    setCurrentView('scanner');
  };

  const handleDetected = (code) => {
    // Handle the barcode code
    alert(`Barcode detected: ${code}`);
    // Optionally switch back to ingredients view or handle accordingly
    setCurrentView('ingredients');
  };

  return (
    <div>
      {currentView === 'ingredients' ? (
        <IngredientsSelector onScanClick={showScanner} />
      ) : (
        <Scanner onDetected={handleDetected} />
      )}
    </div>
  );
}

export default App;
  

//   const [hasEczema, setHasEczema] = useState(false);
//   const [hasIbs, setHasIbs] = useState(false);
//   let conditions = {
//     eczema: hasEczema,
//     ibs: hasIbs,
//   }
  
//   return (
//     <div>
//       <Conditions conditions={conditions} onConditionClicked={(condition) => {
//         if (condition === "IBS") setHasIbs(!hasIbs);
//         if (condition === "ECZEMA") setHasEczema(!hasEczema);
//       }} />
//     </div>
//   );


// export default App;
