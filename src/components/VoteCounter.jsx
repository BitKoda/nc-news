// React
import { useState } from "react";

// Utilities
import { BiDislike, BiLike } from "react-icons/bi";

const VoteCounter = (article, handleUpdate) => {
    const [votes, setVotes] = useState(0);


  return (
    <div className='vote-count'>
          <form onSubmit={handleUpdate}>
            <button
              className='button__upVote'
              onClick={() =>
                setVotes((prevVote) => {
                  return prevVote + 1;
                })
              }
            >
              <BiLike />
            </button>
            <span className='vote--counter'>{article.votes + votes}</span>
            <button
              className='button__downVote'
              onClick={() =>
                setVotes((prevVote) => {
                  return prevVote - 1;
                })
              }
            >
              <BiDislike />
            </button>
          </form>
        </div>
  )
}

export default VoteCounter
