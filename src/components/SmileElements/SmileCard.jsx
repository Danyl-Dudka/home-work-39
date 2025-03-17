import VoteButton from "../VoteButton/VoteButton";
// StateLess 
function SmileCard({ smile, onVote }) {
  return (
    <>
      <h3>{smile.title}</h3>
      <p>{smile.description}</p>
      <VoteButton smile={smile} onVote={onVote} />
    </>
  );
}
export default SmileCard;