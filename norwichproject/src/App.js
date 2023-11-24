import logo from './logo.svg';
import IngredientsSelector from './IngredientsSelector';
import Scanner from './Scanner';
import Results from './Results';
import React, { useState } from 'react';



function App() {
  const [currentView, setCurrentView] = useState('ingredients');

  const [ingredients, setIngredients] = useState({})

  const showScanner = () => {
    setCurrentView('scanner');
  };

  const handleDetected = async(value) => {
    value = "7622210445346";
    const response = (await fetch(`https://world.openfoodfacts.net/api/v3/product/${value}`));
    const result = await response.json();
    
    const finalList = new Set();
    const flatten = (list) =>{
      list.forEach(element => {
        finalList.add(element.id.replace("en:",""));
        console.log(element.id, list.ingredients);
        if(element.ingredients?.length){
          console.log('got here', list.ingredients)
          flatten(element.ingredients);
        }
      });
    }

    flatten(result.product.ingredients)
    //const ing = result.product.ingredients.flatMap(i=>i.ingredients ? (i.ingredients.map(i2=>i2.id)):i.id);
    //const normalised = ing.map(i=>i.replace("en:",""))
    setIngredients([...finalList]);
    // Optionally switch back to ingredients view or handle accordingly
    setCurrentView('results');
    
  
  
  };

  return (
    <div>
      {currentView === 'ingredients' ? (
        <IngredientsSelector onScanClick={showScanner} />
      ) : currentView === 'results' ? <Results ingredients={ingredients}/> : (
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
