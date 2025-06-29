
import React, { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import teams from './teamdata';
import playersData from './playersData';
import "./players.css";




const TeamDetails = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { teamName } = useParams();
    
    const [click,setclick] = useState(false);
    const navigate = useNavigate();
    const team = teams.find(t => t.name === decodeURIComponent(teamName));
    
    const { year } = useParams();
    if (!team) return <h2 className="not-found">Team not found</h2>;
    const goToStats = (playerName) => {
        navigate(`/playeriplstats/${encodeURIComponent(playerName)}`);
    };
    const getRoleIcon = (role) => {
      switch (role.toLowerCase()) {
        case "batsman":
          return "https://www.iplt20.com/assets/images/teams-batsman-icon.svg";
        case "bowler":
          return "https://www.iplt20.com/assets/images/teams-bowler-icon.svg";
        case "all-rounder":
          return "https://www.iplt20.com/assets/images/teams-all-rounder-icon.svg";
        case "wicketkeeper-batsman":
          return "https://www.iplt20.com/assets/images/teams-wicket-keeper-icon.svg";
        default:
          return "/roles/default.png"; 
      }
    };
    
   

    return (
            <div className="players_container">
            <div className='conatiner_top'>
              <div className='containertop_teams'>
                <div className='teams_logoes_playerstop' style={{height:"80vh"}}>
                  <ul className='teamslist_players'>
                  {teams.map((teamlogo, index) => (
                          <li key={index} className='list_image_player' style={{marginTop:"100px"}} onClick={() => { 
                            navigate(`/teams/${encodeURIComponent(teamlogo.name)}`);
                            setclick(true);
                          }
                            }>
                            {selectedImage === teamlogo.id && (
                              <span>
                                <img src={teamlogo.logo} className='rightsymb' style={{height:"10px",width:"10px"}} /> 
                              </span>
                            )}
                              <img 
                                  src={teamlogo.logo} 
                                  className='teambox_playes' 
                                 alt={teamlogo.name}
                              />
                          </li>
                          
                          
                  ))}
                  </ul>
                  <div className='players_top_bottom'>
                    <img src={team.logo} alt={`${team.name} logo`} className="players_team_logo" />
                    <div className='players_top_bottom_middle'>
                        <h3 className="players_team_name" style={{marginTop:"30px",marginBottom:"-10px",marginLeft:"20px",color:"#fff",fontSize:"25px"}}>{team.name}</h3>
                        <div className='logo_winningyears'>    
                        <img src='https://www.iplt20.com/assets/images/team-trophy.png' style={{display:"flex",justifyContent:"start",position:"relative",top:"40px",zIndex:"2",height:"50px",width:"50px"}} />  
                          <div className='cupsborder' style={{marginTop:"-30px"}}>  
                               
                              <h5 className='winning_years' style={{marginLeft:"50px",color:"#fff",fontWeight:"100",marginBottom:"-10px",fontWeight:"bold"}}>{team.winningYears.join(", ")}</h5>
                          </div>  
                          <div className='officialteamsite'>
                            <span>Official Team site
                              <img src='https://www.iplt20.com/assets/images/off-link.svg' className='officiallogosite' style={{
                                marginLeft:"10px"
                              }} />
                            </span>
                          </div>
                        </div>
                        
                    </div>
                    <div className='teamdetails_players' style={{marginLeft:"50px"}}>
                          <ul className='teamdatails_list_players'>
                            <li className=' listplayers list_captain'><span>Captain</span> - {'\u00A0\u00A0'} {team.captain}</li>
                            
                            <li className=' listplayers list_coach'><span>Coach</span> -{'\u00A0\u00A0'} {team.coach}</li>
                            <li className=' listplayers list_owner'><span>Owner</span> - {'\u00A0\u00A0'}{team.owner}</li>
                            <li className=' listplayers list_venue'><span>Venue</span> -{'\u00A0\u00A0'} {team.venue}</li>
                            
                          </ul>
                        </div>

                  </div>
                  
                  
                </div>
              </div>
            </div>
            <div className="players_card" style={{marginTop:"50px",height:"250vh"}}>
            
                <h2 style={{marginTop:"10px",marginLeft:"200px",display:"flex",justifyContent:"start"}}>Batters</h2>
                <div className="players_grid" style={{marginTop:"950px"}}>
                    {playersData[team.name]?.map((player, index) => (
                        <div key={index} className="player_card" onClick={() => goToStats(player.name)}>
                            <div className='top_of_card'>
                              <img 
                                src={getRoleIcon(player.role)} 
                                alt={player.role} 
                                className='rolesymbol' 
                              />
                            </div>

                
                            <img src={player.image} alt={player.name} className="player_image" />
                            <hr className="player_separator" />
                            <div className='player_details'>
                              <h3 className="player_name">{player.name}</h3>
                              <h5 className='role'>{player.role}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
        
          );

          
};

export default TeamDetails;
