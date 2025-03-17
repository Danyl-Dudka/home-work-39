// StateLess
function VoteButton({ smile, onVote }) {
    return (
      <button onClick={() => onVote(smile.id)}>Votes: {smile.smilesVotes}</button>
    );
  }
  
  export default VoteButton;