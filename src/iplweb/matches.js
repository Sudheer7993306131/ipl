import React from 'react';
import './matches.css';


// Sample match data
const matches = [
    {
      date: 'March 22, 2025',
      time: '7:30 PM IST',
      team1: { name: 'Kolkata Knight Riders', img: '/kkr.jpeg' },
      team2: { name: 'Royal Challengers Bangalore', img: '/rcb.jpeg' },
      venue: 'Eden Gardens, Kolkata',
    },
    {
      date: 'March 23, 2025',
      time: '7:30 PM IST',
      team1: { name: 'Mumbai Indians', img: '/mi.jpeg' },
      team2: { name: 'Chennai Super Kings', img: '/csk.png' },
      venue: 'Wankhede Stadium, Mumbai',
    },
    {
      date: 'March 24, 2025',
      time: '7:30 PM IST',
      team1: { name: 'Sunrisers Hyderabad', img: '/srh.jpeg' },
      team2: { name: 'Delhi Capitals', img: '/dc.jpeg' },
      venue: 'Rajiv Gandhi International Stadium, Hyderabad',
    },
    {
      date: 'March 25, 2025',
      time: '7:30 PM IST',
      team1: { name: 'Lucknow Super Giants', img: '/lsg.jpeg' },
      team2: { name: 'Gujarat Titans', img: '/gt.jpeg' },
      venue: 'Ekana Cricket Stadium, Lucknow',
    },
    {
      date: 'March 26, 2025',
      time: '3:30 PM IST',
      team1: { name: 'Punjab Kings', img: '/pbks.jpeg' },
      team2: { name: 'Rajasthan Royals', img: '/rr.jpeg' },
      venue: 'Punjab Cricket Association Stadium, Mohali',
    },
    {
      date: 'March 27, 2025',
      time: '7:30 PM IST',
      team1: { name: 'Chennai Super Kings', img: '/csk.png' },
      team2: { name: 'Royal Challengers Bangalore', img: '/rcb.jpeg' },
      venue: 'MA Chidambaram Stadium, Chennai',
    },
    {
      date: 'March 28, 2025',
      time: '7:30 PM IST',
      team1: { name: 'Delhi Capitals', img: '/dc.jpeg' },
      team2: { name: 'Mumbai Indians', img: '/mi.jpeg' },
      venue: 'Arun Jaitley Stadium, Delhi',
    },
    {
      date: 'March 29, 2025',
      time: '7:30 PM IST',
      team1: { name: 'Sunrisers Hyderabad', img: '/srh.jpeg' },
      team2: { name: 'Lucknow Super Giants', img: '/lsg.jpeg' },
      venue: 'Rajiv Gandhi International Stadium, Hyderabad',
    },
    {
      date: 'March 30, 2025',
      time: '3:30 PM IST',
      team1: { name: 'Punjab Kings', img: '/pbks.jpeg' },
      team2: { name: 'Kolkata Knight Riders', img: '/kkr.jpeg' },
      venue: 'Punjab Cricket Association Stadium, Mohali',
    },
    {
      date: 'March 31, 2025',
      time: '7:30 PM IST',
      team1: { name: 'Gujarat Titans', img: '/gt.png' },
      team2: { name: 'Rajasthan Royals', img: '/rr.jpeg' },
      venue: 'Narendra Modi Stadium, Ahmedabad',
    },
    {
        date: 'March 22, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Kolkata Knight Riders', img: '/kkr.jpeg' },
        team2: { name: 'Royal Challengers Bangalore', img: '/rcb.jpeg' },
        venue: 'Eden Gardens, Kolkata',
      },
      {
        date: 'March 23, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Mumbai Indians', img: '/mi.jpeg' },
        team2: { name: 'Chennai Super Kings', img: '/csk.png' },
        venue: 'Wankhede Stadium, Mumbai',
      },
      {
        date: 'March 24, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Sunrisers Hyderabad', img: '/srh.jpeg' },
        team2: { name: 'Delhi Capitals', img: '/dc.jpeg' },
        venue: 'Rajiv Gandhi International Stadium, Hyderabad',
      },
      {
        date: 'March 25, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Lucknow Super Giants', img: '/lsg.jpeg' },
        team2: { name: 'Gujarat Titans', img: '/gt.jpeg' },
        venue: 'Ekana Cricket Stadium, Lucknow',
      },
      {
        date: 'March 26, 2025',
        time: '3:30 PM IST',
        team1: { name: 'Punjab Kings', img: '/pbks.jpeg' },
        team2: { name: 'Rajasthan Royals', img: '/rr.jpeg' },
        venue: 'Punjab Cricket Association Stadium, Mohali',
      },
      {
        date: 'March 27, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Chennai Super Kings', img: '/csk.png' },
        team2: { name: 'Royal Challengers Bangalore', img: '/rcb.jpeg' },
        venue: 'MA Chidambaram Stadium, Chennai',
      },
      {
        date: 'March 28, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Delhi Capitals', img: '/dc.jpeg' },
        team2: { name: 'Mumbai Indians', img: '/mi.jpeg' },
        venue: 'Arun Jaitley Stadium, Delhi',
      },
      {
        date: 'March 29, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Sunrisers Hyderabad', img: '/srh.jpeg' },
        team2: { name: 'Lucknow Super Giants', img: '/lsg.jpeg' },
        venue: 'Rajiv Gandhi International Stadium, Hyderabad',
      },
      {
        date: 'March 30, 2025',
        time: '3:30 PM IST',
        team1: { name: 'Punjab Kings', img: '/pbks.jpeg' },
        team2: { name: 'Kolkata Knight Riders', img: '/kkr.jpeg' },
        venue: 'Punjab Cricket Association Stadium, Mohali',
      },
      {
        date: 'March 31, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Gujarat Titans', img: '/gt.jpeg' },
        team2: { name: 'Rajasthan Royals', img: '/rr.jpeg' },
        venue: 'Narendra Modi Stadium, Ahmedabad',
      },
      {
        date: 'March 22, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Kolkata Knight Riders', img: '/kkr.jpeg' },
        team2: { name: 'Royal Challengers Bangalore', img: '/rcb.jpeg' },
        venue: 'Eden Gardens, Kolkata',
      },
      {
        date: 'March 23, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Mumbai Indians', img: '/mi.jpeg' },
        team2: { name: 'Chennai Super Kings', img: '/csk.png' },
        venue: 'Wankhede Stadium, Mumbai',
      },
      {
        date: 'March 24, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Sunrisers Hyderabad', img: '/srh.jpeg' },
        team2: { name: 'Delhi Capitals', img: '/dc.jpeg' },
        venue: 'Rajiv Gandhi International Stadium, Hyderabad',
      },
      {
        date: 'March 25, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Lucknow Super Giants', img: '/lsg.jpeg' },
        team2: { name: 'Gujarat Titans', img: '/gt.jpeg' },
        venue: 'Ekana Cricket Stadium, Lucknow',
      },
      {
        date: 'March 26, 2025',
        time: '3:30 PM IST',
        team1: { name: 'Punjab Kings', img: '/pbks.jpeg' },
        team2: { name: 'Rajasthan Royals', img: '/rr.jpeg' },
        venue: 'Punjab Cricket Association Stadium, Mohali',
      },
      {
        date: 'March 27, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Chennai Super Kings', img: '/csk.png' },
        team2: { name: 'Royal Challengers Bangalore', img: '/rcb.jpeg' },
        venue: 'MA Chidambaram Stadium, Chennai',
      },
      {
        date: 'March 28, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Delhi Capitals', img: '/dc.jpeg' },
        team2: { name: 'Mumbai Indians', img: '/mi.jpeg' },
        venue: 'Arun Jaitley Stadium, Delhi',
      },
      {
        date: 'March 29, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Sunrisers Hyderabad', img: '/srh.jpeg' },
        team2: { name: 'Lucknow Super Giants', img: '/lsg.jpeg' },
        venue: 'Rajiv Gandhi International Stadium, Hyderabad',
      },
      {
        date: 'March 30, 2025',
        time: '3:30 PM IST',
        team1: { name: 'Punjab Kings', img: '/pbks.jpeg' },
        team2: { name: 'Kolkata Knight Riders', img: '/kkr.jpeg' },
        venue: 'Punjab Cricket Association Stadium, Mohali',
      },
      {
        date: 'March 31, 2025',
        time: '7:30 PM IST',
        team1: { name: 'Gujarat Titans', img: '/gt.png' },
        team2: { name: 'Rajasthan Royals', img: '/rr.jpeg' },
        venue: 'Narendra Modi Stadium, Ahmedabad',
      },
      {
          date: 'March 22, 2025',
          time: '7:30 PM IST',
          team1: { name: 'Kolkata Knight Riders', img: '/kkr.jpeg' },
          team2: { name: 'Royal Challengers Bangalore', img: '/rcb.jpeg' },
          venue: 'Eden Gardens, Kolkata',
        },
        {
          date: 'March 23, 2025',
          time: '7:30 PM IST',
          team1: { name: 'Mumbai Indians', img: '/mi.jpeg' },
          team2: { name: 'Chennai Super Kings', img: '/csk.png' },
          venue: 'Wankhede Stadium, Mumbai',
        },
        {
          date: 'March 24, 2025',
          time: '7:30 PM IST',
          team1: { name: 'Sunrisers Hyderabad', img: '/srh.jpeg' },
          team2: { name: 'Delhi Capitals', img: '/dc.jpeg' },
          venue: 'Rajiv Gandhi International Stadium, Hyderabad',
        },
        {
          date: 'March 25, 2025',
          time: '7:30 PM IST',
          team1: { name: 'Lucknow Super Giants', img: '/lsg.jpeg' },
          team2: { name: 'Gujarat Titans', img: '/gt.jpeg' },
          venue: 'Ekana Cricket Stadium, Lucknow',
        },
        {
          date: 'March 26, 2025',
          time: '3:30 PM IST',
          team1: { name: 'Punjab Kings', img: '/pbks.jpeg' },
          team2: { name: 'Rajasthan Royals', img: '/rr.jpeg' },
          venue: 'Punjab Cricket Association Stadium, Mohali',
        },
        {
          date: 'March 27, 2025',
          time: '7:30 PM IST',
          team1: { name: 'Chennai Super Kings', img: '/csk.png' },
          team2: { name: 'Royal Challengers Bangalore', img: '/rcb.jpeg' },
          venue: 'MA Chidambaram Stadium, Chennai',
        },
        {
          date: 'March 28, 2025',
          time: '7:30 PM IST',
          team1: { name: 'Delhi Capitals', img: '/dc.jpeg' },
          team2: { name: 'Mumbai Indians', img: '/mi.jpeg' },
          venue: 'Arun Jaitley Stadium, Delhi',
        },
        {
          date: 'March 29, 2025',
          time: '7:30 PM IST',
          team1: { name: 'Sunrisers Hyderabad', img: '/srh.jpeg' },
          team2: { name: 'Lucknow Super Giants', img: '/lsg.jpeg' },
          venue: 'Rajiv Gandhi International Stadium, Hyderabad',
        },
        {
          date: 'March 30, 2025',
          time: '3:30 PM IST',
          team1: { name: 'Punjab Kings', img: '/pbks.jpeg' },
          team2: { name: 'Kolkata Knight Riders', img: '/kkr.jpeg' },
          venue: 'Punjab Cricket Association Stadium, Mohali',
        },
        {
          date: 'March 31, 2025',
          time: '7:30 PM IST',
          team1: { name: 'Gujarat Titans', img: '/gt.jpeg' },
          team2: { name: 'Rajasthan Royals', img: '/rr.jpeg' },
          venue: 'Narendra Modi Stadium, Ahmedabad',
        },
  ];

const Matches = () => {
  return (
    <div className="matches-page">
      <h1 className='match_heading'>IPL 2025 Match Schedule</h1>
      <div className="matches-list">
        {matches.map((match, index) => (
          <div key={index} className="match-card">
            <div className="match-info">
              <div className="team">
                <img src={match.team1.img} alt={match.team1.name} className="teamimage" />
                <span className="team-name">{match.team1.name}</span>
              </div>
              <div className="vs">
                <img src="/vs.png" className='vslogo' />
              </div>
              <div className="team">
                <img src={match.team2.img} alt={match.team2.name} className="teamimage" />
                <span className="team-name">{match.team2.name}</span>
              </div>
            </div>
            <div className="match-details">
              <span>{match.date}</span>
              <span>{match.time}</span>
              <span>{match.venue}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
