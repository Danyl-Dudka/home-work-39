import SmileCard from "./SmileCard";
// StateLess
function SmilesMap({ smiles, onVote }) {
  return (
    <>
      {smiles.map(smile => (
        <SmileCard key={smile.id} smile={smile} onVote={onVote} />
      ))}
    </>
  );
}

export default SmilesMap;