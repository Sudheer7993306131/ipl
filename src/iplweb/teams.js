import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import teams from './teamdata';
import './teams.css';

const Teams = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered card index

  const mouseEnter = (index) => {
    setHoveredIndex(index); // Set hovered index
  };

  const mouseLeave = () => {
    setHoveredIndex(null); // Reset when leaving
  };

  return (
    <div className="teams-page">
      <h1 className="page-title">
        <img src='/ipllogoteams.png' className='ipllogo' alt="IPL Logo" />
      </h1>
      <div className="teams-grid">
        {teams.map((team, index) => (
          hoveredIndex === index ? (

            team.titles !== 0 ? 
                <div
                key={index}
                className="team-card"
                style={{backgroundColor:"#fff"}}
                onClick={() => navigate(`/teams/${encodeURIComponent(team.name)}`)}
                onMouseEnter={() => mouseEnter(index)}
                onMouseLeave={mouseLeave}
                >
                  <div className='cup_top'>
                    <img src={team.logo} className='imageheading' />
                    <h1 className='team_name'>{team.shortName}</h1>
                  </div>
                <div className="team-logo-container" >
                  <img src={team.cup} className='cup' />
                  
                </div>
                <h2 className="teamwinning">{team.winningYears.join(" | ")
                }</h2>
                </div>
                :
                <div
              key={index}
              className="team-card"
              style={{ backgroundColor: team.secondaryColor }}
              onClick={() => navigate(`/teams/${encodeURIComponent(team.name)}`)}
              onMouseEnter={() => mouseEnter(index)}
              onMouseLeave={mouseLeave}
            >
              <div className="team-logo-container" style={{ backgroundColor: team.color }}>
                <img src={team.logo} alt={`${team.name} logo`} className="team-logo" />
              </div>
              <h2 className="team-name">{team.name}</h2>
            </div>

          ) : (
            <div
              key={index}
              className="team-card"
              style={{ backgroundColor: team.secondaryColor }}
              onClick={() => navigate(`/teams/${encodeURIComponent(team.name)}`)}
              onMouseEnter={() => mouseEnter(index)}
              onMouseLeave={mouseLeave}
            >
              <div className="team-logo-container" style={{ backgroundColor: team.color }}>
                <img src={team.logo} alt={`${team.name} logo`} className="team-logo" />
              </div>
              <h2 className="team-name">{team.name}</h2>
            </div>
            
          )
        ))}
      </div>
    </div>
  );
};

export default Teams;
