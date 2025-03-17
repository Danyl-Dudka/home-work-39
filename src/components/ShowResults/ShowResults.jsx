import { useState } from "react";
// StateFul
function ShowResults({ smiles }) {
    const [winner, setWinner] = useState(null);
  
    function handleShowResults() {      
      const topSmile = smiles.reduce((max, smile) => 
        smile.smilesVotes < max.smilesVotes ? max : smile, smiles[0]
      );
  
      setWinner(topSmile);
    }
  
    return (
      <>
        <button onClick={handleShowResults} className="showresults_button">Show Results</button>
        {winner && (
          <div>
            <h2>Winner:</h2>
            <h3>{winner.title}</h3>
            <p>{winner.description}</p>
            <p>Votes: {winner.smilesVotes}</p>
          </div>
        )}
      </>
    );
  }
  
  export default ShowResults;
  