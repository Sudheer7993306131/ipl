import React, { useState, useEffect } from "react";
import "./fanpoll.css";

const cricketPolls = [
  { question: "🏆 Who will win the IPL this season?", options: ["CSK", "MI", "RCB"] },
  { question: "🏏 Who is the greatest batsman?", options: ["Sachin", "Kohli", "Ponting"] },
  { question: "🔥 Best bowling attack?", options: ["India", "Australia", "Pakistan"] },
  { question: "🌍 Who will win the World Cup?", options: ["India", "England", "Australia"] },
  { question: "⚡ Most exciting format?", options: ["Test", "ODI", "T20"] },
  { question: "🌟 Best all-rounder?", options: ["Stokes", "Jadeja", "Shakib"] },
  { question: "🏟️ Best cricket stadium?", options: ["Lords", "MCG", "Eden Gardens"] },
  { question: "⚡ Fastest bowler?", options: ["Shoaib Akhtar", "Brett Lee", "Starc"] },
  { question: "🎯 Best captain?", options: ["MS Dhoni", "Ricky Ponting", "Steve Waugh"] }
];

const FanPoll = () => {
  // here array is initialised with the length of the array cricketpolls with initial value 0 in all index
  const storedVotes = JSON.parse(localStorage.getItem("pollVotes")) ||
                      cricketPolls.map(q => Array(q.options.length).fill(0));
  // store selected votes in the stored votes
  const [votes, setVotes] = useState(storedVotes);
  // give the true if we vote the question otherwise it will be false
  const [hasVoted, setHasVoted] = useState(Array(cricketPolls.length).fill(false));

  // Save votes to localStorage
  useEffect(() => {
    localStorage.setItem("pollVotes", JSON.stringify(votes));
  }, [votes]);


  // run when we click the button of options and increment he value of perticular option vote number
  const handleVote = (questionIndex, optionIndex) => {
    const newVotes = [...votes];
    newVotes[questionIndex][optionIndex] += 1;
    setVotes(newVotes);

    const updatedHasVoted = [...hasVoted];
    updatedHasVoted[questionIndex] = true;
    setHasVoted(updatedHasVoted);
  };

  return (
    <div className="poll-container">
      <div className="pollheadingouter">
        <div className="pollheading">
          <h2 className="poll-title">Fan Poll</h2>
        </div>
      </div>

      <div className="poll-grid">
        {cricketPolls.map((poll, questionIndex) => {
          // count the no off votes will be voted in the website for each question
          const totalVotes = votes[questionIndex].reduce((acc, val) => acc + val, 0);

          return (
            <div key={questionIndex} className="poll-card">
              <h3 className="poll-question">{poll.question}</h3>
              <div className="options-container">
                {poll.options.map((option, optionIndex) => {
                  // count votes of each option 
                  const optionVotes = votes[questionIndex][optionIndex];
                  const percentage =
                    totalVotes > 0 ? ((optionVotes / totalVotes) * 100).toFixed(1) : 0;

                  return (
                    <button
                      key={optionIndex}
                      className="option-button"
                      onClick={() => handleVote(questionIndex, optionIndex)}
                    >
                      
                      {option} {hasVoted[questionIndex] && `(${percentage}%)`}
                    </button>
                  );
                })}
              </div>
              {hasVoted[questionIndex] && totalVotes > 0 && (
                <p className="total-votes">Total Votes: {totalVotes}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FanPoll;
