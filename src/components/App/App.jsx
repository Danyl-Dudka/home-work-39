import { useState } from 'react';
import './App.css';
import SmilesMap from './../SmileElements/SmilesMap.jsx';
import ShowResults from './../ShowResults/ShowResults.jsx';
import SmilesConfig from './../SmileElements/SmilesConfig.jsx';
// StateFul
function App() {
  const [smiles, setSmiles] = useState(SmilesConfig);

  function handleVote(id) {
    setSmiles(smiles.map(smile =>
      smile.id === id ? { ...smile, smilesVotes: smile.smilesVotes + 1 } : smile
    ));
  }

  return (
    <>
      <SmilesMap smiles={smiles} onVote={handleVote} />
      <ShowResults smiles={smiles}/>
    </>
  );
}

export default App;