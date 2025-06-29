  import React from "react";
  import { Link } from "react-router-dom";
  import Slider from "react-slick";
  import "./home.css";
  import Pointstable from "./pointstable";
  import { useRef } from "react";
  import magicMoments from "./magicmoments";
  import { useNavigate } from "react-router-dom";
  


  // Import required CSS for react-slick
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";


  
    const players = [
      {
        id: 1,
        firstname: "Nicholas",
        lastname: "Pooran",
        role: "Orange Cap",
        image: "https://scores.iplt20.com/ipl/playerimages/136.png?v=4",
        capImage: "https://scores.iplt20.com/ipl/images/orange-cap.png?v=4",
        stats: {
          M: 3,
          HS: 75,
          Avg: 67.00,
          SR: 219.76,
          "4/6'S": "12/13",
          "50/100's": "2/0"
        },
        score: 201,
        unit: "Runs"
      },
      {
        id: 2,
        firstname: "Noor",
        lastname: "Ahmad",
        role: "Purple Cap",
        image: "https://scores.iplt20.com/ipl/playerimages/975.png?v=4",
        capImage: "https://scores.iplt20.com/ipl/images/purple-cap.png?v=4",
        stats: {
          M: 3,
          Wk: 9,
          Eco: 6.83,
          Avg: 4.50,
          BBI: "4/18",
          "4/5W": "1/0"
        },
        score: 9,
        unit: "Wickets"
      },
      {
        id: 3,
        firstname: "Mitchell",
        lastname: "Starc",
        role: "Best Bowling Figures",
        image: "https://scores.iplt20.com/ipl/playerimages/31.png?v=4",
        stats: {
          M: 3,
          Wk: 8,
          Eco: 7.50,
          BBI: "5/35",
          "4/5W": "0/1"
        },
        score: "5/35",
        unit: "BBI"
      },
      {
        id: 4,
        firstname: "Ishan",
        lastname: "Kishan",
        role: "Highest Score",
        image: "https://scores.iplt20.com/ipl/playerimages/164.png?v=4",
        stats: {
          M: 3,
          HS: "106*",
          Avg: 54.00,
          "4/6's": "11/6",
          "50/100's": "0/1"
        },
        score: 106,
        unit: "HS"
      }
    ];
    

  const teams = [
    { name: "Chennai Super Kings" },
    { name: "Mumbai Indians" },
    { name: "Royal Challengers Bangalore" },
    { name: "Kolkata Knight Riders" },
    { name: "Sunrisers Hyderabad" },
    { name: "Delhi Capitals" },
    { name: "Rajasthan Royals" },
    { name: "Punjab Kings" },
    { name: "Lucknow Super Giants" },
    { name: "Gujarat Titans" },
  ];
  
  const Home = () => {
    
    const heroCarouselSettings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,    
      autoplaySpeed: 3000, 
      pauseOnHover: false,
      
    };
    

    const magicMomentsRef = useRef(null);
    const navigate = useNavigate();
    const pointsTableRef = useRef(null);
    
    const handleTeamClick = (teamName) => {
      navigate(`/teams/${encodeURIComponent(teamName)}`);
    };

    
    const scrollLeft = () => {
      if (magicMomentsRef.current) {
        magicMomentsRef.current.scrollBy({ left: -350, behavior: "smooth" });
      }
    };

  
    const scrollRight = () => {
      if (magicMomentsRef.current) {
        magicMomentsRef.current.scrollBy({ left: 350, behavior: "smooth" });
      }
    };


    const scrollLeft1 = () => {
      if (pointsTableRef.current) {
        pointsTableRef.current.scrollBy({ left: -350, behavior: "smooth" });
      }
    };
    const scrollRight1 = () => {
      if (pointsTableRef.current) {
        pointsTableRef.current.scrollBy({ left: 350, behavior: "smooth" });
      }
    };

    

    const PerformaceScroll = useRef(null);

  const scrollLeft2 = () => {
    if (PerformaceScroll.current) {
      PerformaceScroll.current.scrollBy({ left: -1300, behavior: "smooth" });
    }
  };

  const scrollRight2 = () => {
    if (PerformaceScroll.current) {
      PerformaceScroll.current.scrollBy({ left: 1300, behavior: "smooth" });
    }
  };
    
    const heroSlides = [
      {
        id: 1,
        title: "Miya magical Spell",
        subtitle: "Chinnaswamy Stadium Mein Suiiiii Ka  Raj.........",
        img: "https://brightcove.iplt20.com/output/input/6370931264112-1743617431.jpg"
      },
      {
        id: 2,
        title: "Quick As A Flash",
        subtitle: "Lightnings Are Quicker In Sky...!",
        img: "https://assets.bcci.tv/watermarkoutput/bcci/photos/1801/4e72ed5c-002f-4f17-9b65-9885392e3c6a.jpg"
      },
      {
        id: 3,
        title: "Fearless Pant ",
        subtitle: "Rishabh's Game , IPL's Flame",
        img: "data:image/jpeg;base64,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"
      },
      {
        id: 4,
        title: "IPL T20",
        subtitle: "Place Where Talant Meets Opportunity",
        img: "https://images.supersport.com/media/2nobdbkq/ipl-2025g1200.jpg?width=500&quality=90&format=webp"
      },
      {
        id: 5,
        title: "Agression Unleashed",
        subtitle: " ",
        img: "https://assets.bcci.tv/watermarkoutput/bcci/photos/1812/ee1fc1bd-5614-47e7-a0b2-c7b69b2b2dd0.jpg"
      },
     
      {
        id: 6,
        title: "Ishan kishan Century",
        subtitle: "What a Start at New Franchise",
        img: "https://assets.bcci.tv/watermarkoutput/bcci/photos/1800/67293ffe-51d7-4473-b07b-e9e5cf35442d.jpg"
      },
      {
        id: 7,
        title: "Kohli's cover drive",
        subtitle: "",
        img: "https://assets.bcci.tv/watermarkoutput/bcci/photos/1450/00c99a9a-1bfd-4922-bd9e-297dacfd8464.jpg"
      }
    ];

    //points table

    
    

    return (
      <div className="home_container" style={{marginLeft:"0px",width:"100%"}}>
        
        <section className="hero">
          <Slider {...heroCarouselSettings} className="hero-carousel">
            {heroSlides.map((slide) => (
              <div key={slide.id} className="hero-slide">
                <div 
                  className="hero-slide-bg" 
                  style={{ backgroundImage: `url(${slide.img})`}}
                ></div>
                <div className="hero-overlay">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  
                </div>
              </div>
            ))}
          </Slider>
        </section>

        <div className="magicmoments container">
        
        <div className="buttons_to_scroll">
          <div className="heading_magicmoments">
            <h1 className="title text-center" style={{color:"#fff"}}>Magic Moments</h1>
          </div>
        <button className="scroll-btn left" onClick={scrollLeft}>&#10094;</button>
        <button className="scroll-btn right" onClick={scrollRight}>&#10095;</button>
        </div>
        <div className="scroll-container">
          
          <div className="magic-moments-wrapper" ref={magicMomentsRef}>
            {magicMoments.map((moment, index) => (
              <div key={index} className="magic-card" style={{position: "relative", 
                display: "inline-block", 
                borderRadius: "12px", 
                overflow: "hidden", 
                border:"none"}}>
            <img 
              src={moment.image} 
              className="card_img_top" 
              style={{
                height: "140px",
                width: "100%",
                borderRadius: "12px",
                objectFit: "cover",
                display: "block",
              
                }} 
                  alt={moment.title} 
                />
                
          

                <div className="card-body">
                  <div className="middlecard_home" style={{display:"flex",gap:"40px",marginBottom:"-15px"}}>
                      <h5 className="card-title" style={{color:"#fff",width:"150px",marginLeft:"10px"}}>{moment.title}</h5>
                      <img src="https://documents.iplt20.com//ipl/assets/images/new-icon-share-gray.svg" className="image_middle" style={{
                        height:"30px",width:"30px",marginTop:"20px"
                  }} />
                  </div>
                  <hr className="horizontalline" style={{marginBottom:'15px',marginLeft:"10px"}} />
                  <div className="details">
                    
                    <span className="date" style={{fontSize:"12px",marginLeft:'10px'}}><i className="fas fa-calendar-alt"></i> {moment.date}</span>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* points table */}
      <div className="pointstable_home"  >
        <div className="heading_home_pointstable">
          <h2 className="pointstable_heading" style={{fontSize:"25px",position:"relative",top:"30px",left:"-430px"}}>Points Table</h2>
        </div>
        <div className="buttons_pointstable">
        <button className="scroll-btnpoints left" style={{color:"black"}} onClick={scrollLeft1}>
            &#10094;
          </button>
        <button className="scroll-btnpoints right" style={{color:"black"}} onClick={scrollRight1}>
            &#10095;
          </button>
        </div>
        <div className="scroll-container" >
          
          <div className="card_container" ref={pointsTableRef} style={{alignContent:"center"}}>
            {Pointstable.map((team, index) => (
              <div key={index} className="card_pointstable" >
                {/* <b className="position_number">{team.position}</b> */}
                <h3 className="heading_pontscard">
                  {team.team}
                </h3>
                <img
                  src={team.Image}
                  alt={team.team}
                  className="image_pointstable"
                />
                <hr className="horizontal_line" />
                <div className="middlecard_pointstable">
                    <div className="points_pointstable">
                          <h4>{team.points}</h4>
                          <p>Points</p>
                    </div>
                    <div className="played">
                      <h4>{team.matchesPlayed}</h4>
                      <p>Played</p>
                    </div>
                    <div className="won_pointstable">
                      <h4>{team.wins}</h4>
                      <p>Won</p>
                    </div>
                    <div className="netrunrate_pointstable">
                      <h4 style={{color:"red",fontWeight:"bolder"}}>{team.netRunRate}</h4>
                      <p className="net_points">NRR</p>
                    </div>
                </div>
                <p className="recent-form">
                  <h4 style={{textAlign:"start",marginLeft:"15px",fontSize:"15px",marginTop:"-10px"}}>Recent form</h4>
                  <p style={{textAlign:"start",marginLeft:"20px"}}>{team.recentForm.join(" ")}</p>
                  
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>


      {/* Top performers */}

    
      <div className="Top_performers_home" style={{ height: "80vh" }}>
      <div className="Header_topperformer">
        
        <div className="buttons_pointstable" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "0 20px"
        }}>
          
          <h2 style={{color:"#fff",marginRight:"auto"}}>Top Performers</h2>
          <div style={{position:"relative",top:"25px",left:"-15%",color:"#fff"}}>
          <button className="scroll-btnpoints left" onClick={scrollLeft2} style={{color:"#fff"}}>
            &#10094;
          </button>
          <button className="scroll-btnpoints right" onClick={scrollRight2} style={{color:"#fff"}}>
            &#10095;
          </button>
          </div>
        </div>
      </div>

      <div
        className="performer_slide"
        ref={PerformaceScroll}
        style={{
          display: "flex",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          gap: "20px",
          scrollbarWidth: "none", 
          msOverflowStyle: "none", 
        }}
      >
        {players.map((player) => (
          <div key={player.id} className="performer_card fade-in" style={{ display: "flex",
           justifyContent: "center",
            alignItems: "center",
             flexShrink: 0,
              width: "100%"
            }}>
            <img src={player.image}
             className="player_image" 
             alt={player.name} 
             style={{ height: "250px", width: "250px", marginTop: "-50px" }} 
             />
            <div className="details" 
            style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="capbox" 
              style={{ display: "flex", backgroundColor: "black", border: "1px solid white", borderRadius: "4px", height: "25px", width: "140px", alignItems: "center" }}
              >
                <img src={player.capImage} 
                className="imagecap" 
                style={{ height: "20px", width: "20px", marginLeft: "15px" }} 
                />
                <h4 style={{ marginLeft: "10px", color: "white" }}>{player.role}</h4>
              </div>
              <div className="nameplayer">
                <h4 style={{ fontSize: "21px", fontWeight: "500", color: "#fff" }}>{player.firstname}</h4>
                <h4 style={{ color: "#fff", fontSize: "60px", marginTop: "-30px" }}>{player.lastname}</h4>
              </div>
              <div className="achievement_player" style={{ display: "flex" }}>
                <h2 style={{ fontSize: "50px", color: "red", marginTop: "-80px" }}>{player.score}</h2>
                <h5 style={{ fontSize: "17px", marginTop: "-50px", marginLeft: "10px", fontWeight: "100", color: "#fff" }}>{player.unit}</h5>
              </div>
              <div className="border_stats_home" style={{ border: "1px solid #fff", height: "60px", width: "110%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="stats" style={{ display: "flex" }}>
                  {Object.entries(player.stats).map(([key, value]) => (
                    <div key={key} className="stat_item" style={{ display: "flex", flexDirection: "column", marginLeft: "20px", textAlign: "center" }}>
                      <b style={{ color: "#fff", marginBottom: "5px" }}>{key}</b>
                      <span style={{ fontSize: "15px" }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    


        {/* Sponsors Section */}
        <div className="sponcers_contaoner_home" style={{borderRadius:"15px",display:"flex",color:"#fff",paddingBottom:"15px",fontSize:"10px",paddingTop:"15px"}}>
          <div className="tata_spon" style={{marginLeft:"10px",textAlign:"center", borderRight: "2px solid white", padding: "20px",height:"80%"}}>
            <h5>title sponsor </h5>
            <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-tata-logo.webp"
            className="image_tata_home_sponcer" 
            style={{height:"100px",width:"100px"}}
            />
            
          </div>
          <div className="associatepartner_sponcer_home" style={{textAlign:"center",marginLeft:"30px" ,height:"100%"}}>
            <h4>ASSOCIATE PARTNER</h4>
            <div className="images_associatepartners" style={{display:"flex",justifyContent:"center",gap:"20px",marginTop:"50px"}}>
              <img 
              src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-my11circle-logo.webp"
              className="my11circlesponcer"
              style={{height:"25px",width:"120px"}} 
              />
              <img 
              src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-angelone-logo.webp"
              className="angelone_sponcer"
              style={{height:"25px",width:"120px"}} 
              />
              <img
              src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-rupay-logo.webp"
              className="rupay_sponcer"
              style={{height:"25px",width:"120px"}} 
              />
            </div>
          </div>
          <div className="official_umpirepartner" style={{textAlign:"center",width:"120px",marginLeft:"30px",borderRight: "2px solid white", padding: "20px",borderLeft:"2px solid white",height:"80%"}}>
            <h4>OFFICIAL UMPIRE PARTNER</h4>
            <img src="https://documents.iplt20.com//ipl/assets/images/new-partner-wonder-cement.webp"
            className="wondercement"
            style={{height:"70px",width:"90px"}}
            />

          </div>
          <div className="officialstrategictimeout" style={{textAlign:"center",width:"150px",marginLeft:"10px"}}>
            <h4>OFFICIAL STRATEGIC TIMEOUT PARTNER</h4>
            <img
            src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-ceat-logo.webp"
            className="ceat_sponcer"
            style={{height:"25px",width:"80px",marginTop:"50px"}}
            />

          </div>
          <div className="officialbrodcaster" style={{textAlign:"center",width:"80px",marginLeft:"20px",borderRight: "2px solid white", padding: "30px",borderLeft:"2px solid white",height:"50%"}}>
            <h4 style={{marginTop:"-20px"}}>OFFICIAL BRODCASTER</h4>
            <img
            src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-start-sports-logo.webp"
            className="starsports_sponcer"
            style={{height:"80px",width:"80px",marginTop:"5px"}}
            />
          </div>
          <div className="official_digital_streaming_partner" style={{textAlign:"center",width:"120px",marginLeft:"0px",borderRight: "2px solid white", padding: "20px"}}>
            <h4 style={{marginTop:"-10px"}}>OFFICIAL DIGITAL STREAMING PARTNER</h4>
            <img
            src="https://documents.iplt20.com//ipl/assets/images/JioHotstar.webp"
            className="jiohotstar_sponcer"
            style={{height:"80px",width:"80px"}}
            />
          </div>
        </div>

        {/* Footer */}

        <footer style={{ backgroundColor: "#222", color: "#fff", padding: "20px 0" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between",marginLeft:"100px"}}>
          
          {/* IPL Teams Section */}
          <div style={{ flex: 1, paddingRight: "20px" }}>
            <h5 style={{ color: "White",fontSize:"20px",alignItems:"center",marginLeft:"10px",marginBottom:"-10px" }}>TEAM</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {teams.map((team, index) => (
                <li
                  key={index}
                  onClick={() => handleTeamClick(team.name)}
                  style={{
                    cursor: "pointer",
                    padding: "5px 10px",
                    marginBottom: "5px",
                    fontSize:"12px",
                    color:"white"
                    
                    
                  }}
                  
                >
                  {team.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div style={{ flex: 1, paddingLeft: "20px",marginLeft:"250px" }}>
            <h5 style={{ color: "#fff",fontSize:"18px" }}>CONTACT</h5>
            <div style={{fontSize:"12px"}}>
            <p>📧 Email: <a href="/" style={{ color:"white", textDecoration: "none" }}>kingkohli@gmail.com</a></p>
            <p>📞 Phone: +91 7993306131</p>
            <p>📍 Address: BCCI Headquarters, Mumbai, India</p>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div style={{ textAlign: "center", marginTop: "20px", paddingTop: "10px",backgroundColor:"black",paddingBottom:"10px",marginBottom:"-20px" }}>
          <p style={{fontSize:"12px"}}>&copy; 2025 IPL T20. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
      </div>
    );
  };

  export default Home;