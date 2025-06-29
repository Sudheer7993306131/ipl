import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PlayerStats = () => {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { playerName } = useParams();

  useEffect(() => {
    const fetchPlayerStats = async () => {
      if (!playerName.trim()) {
        setError("Please enter a Player Name!");
        return;
      }

      setLoading(true);
      setError("");
      setPlayerData(null);

      try {
        const apiKey = process.env.REACT_APP_CRICAPI_KEY;

        // Step 1: Search for Player ID
        const searchResponse = await axios.get(
          `https://api.cricapi.com/v1/players?apikey=${apiKey}&search=${playerName.toLowerCase()}`
        );

        const players = searchResponse.data.data;

        if (!players || players.length === 0) {
          setError("Player not found!");
          setLoading(false);
          return;
        }

        const playerId = players[0].id;

        // Step 2: Fetch Player Stats
        const statsResponse = await axios.get(
          `https://api.cricapi.com/v1/players_info?apikey=${apiKey}&id=${playerId}`
        );

        if (statsResponse.data.status === "success") {
          console.log("API Response:", statsResponse.data.data);
          setPlayerData(statsResponse.data.data);
        } else {
          setError("Failed to fetch player details.");
        }
      } catch (err) {
        setError("Error fetching player data.");
      }

      setLoading(false);
    };

    fetchPlayerStats();
  }, [playerName]); // Dependency ensures fetch runs only when playerName changes

  const getIPLStats = () => {
    if (!playerData?.stats) return [];
    return playerData.stats.filter((stat) => stat.matchtype === "ipl");
  };

  return (
    <div className="container-players" 
    style={{textAlign:"center"}}>
      <h2 className="text-center" style={{marginTop:"100px",marginLeft:"-150px"}}>Cricket Player Stats</h2>

      {loading && <p style={{textAlign:"center",color:"red",marginTop:"50px"}}>Loading...</p>}
      {error && <p style={{textAlign:"center",color:"red",marginTop:"50px"}}>{error}</p>}

      {playerData && (
        <div className="players_div" style={{marginTop:"50px"}}>
          <h4>{playerData.name}</h4>
          <img src={playerData.playerImg} alt={playerData.name} width="150" style={{height:"100px",width:"100px"}} />
          <p><strong>Country:</strong> {playerData.country}</p>
          <p><strong>Role:</strong> {playerData.role}</p>
          <p><strong>Batting Style:</strong> {playerData.battingStyle}</p>
          <p><strong>Bowling Style:</strong> {playerData.bowlingStyle}</p>
          

          {/* IPL Stats Section */}
          {getIPLStats().length > 0 ? (
            <div className="div_players_stats" style={{marginTop:"50px"}}>
              <h2>IPL Stats</h2>
              <ul>
                {getIPLStats().map((details, index) => (
                  <li key={index} style={{listStyle:"none",marginLeft:"-50px"}}>
                    <strong>{details.stat}:</strong> {details.value}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No IPL stats available for this player.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PlayerStats;
