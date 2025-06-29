import React from "react";
import iplData from "./ipldata";
import "./stats.css";
import { useNavigate } from "react-router-dom";

const Stats = () => {
  const navigate = useNavigate();

   
   return (
    <div className="ipl-stats-container">
      <h2>🏆 IPL Winners & Stats (2008 - 2024)</h2>
      <div className="seasons-list">
        {iplData.map((season, index) => (
          <div key={index} className="season-card" onClick={() => navigate(`/ipl/${encodeURIComponent(season.winner)}`)} >
            
            <h3>{season.year}</h3>
            <div className="team-info">
              <div className="team">
                <img 
                  src={season.winnerCaptainImg} 
                  alt={`${season.winner} Captain`} 
                  className="captainimageleft"
                />
                <p className="team-name">{season.winner}</p>
                <p className="captain-name">Captain: {season.winnerCaptain}</p>
              </div>
              <span className="vs">VS</span>
              <div className="team">
                <img 
                  src={season.runnerUpCaptainImg} 
                  alt={`${season.runnerUp} Captain`} 
                  className="captainimageright"
                />
                <p className="team-name">{season.runnerUp}</p>
                <p className="captain-name">Captain: {season.runnerUpCaptain}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
