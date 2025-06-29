import React from "react";
import { useParams } from "react-router-dom";
import iplData from "./ipldata";
import "./ipl.css";


const IPL = () => {
  const { winner } = useParams();

  // Find the team details
  const seasonDetails = iplData.find((season) => season.winner === winner);

  if (!seasonDetails) {
    return <h2>Details not found!</h2>;
  }

  return (
    <div className="team-details-container">
      <h1>🏆 {seasonDetails.winner} - IPL Champions</h1>

      
      <div className="winner-section" style={{backgroundColor:seasonDetails.color}}>
        <img src={seasonDetails.winnerLogo} alt={seasonDetails.winner} className="team_logo" />
        <p className="team" style={{color:"#fff",paddingBottom:"70px"}}>{seasonDetails.winner}</p>
      </div>

      {/* Player Stats */}
      <div className="players-section">
        <div className="player-card">
          <h3>🏏 Highest Run Getter</h3>
          <img src={seasonDetails.highestRunGetterImg} alt="Highest Run Getter" className="player-img" />
          <h4>{seasonDetails.highestRunGetter}</h4>
          <p>Runs: {seasonDetails.highestRuns}</p>
        </div>

        <div className="player-card">
          <h3>🎯 Highest Wicket Taker</h3>
          <img src={seasonDetails.highestWicketTakerImg} alt="Highest Wicket Taker" className="player-img" />
          <h4>{seasonDetails.highestWicketTaker}</h4>
          <p>Wickets: {seasonDetails.highestWickets}</p>
        </div>
      </div>
    </div>
  );
};

export default IPL;
