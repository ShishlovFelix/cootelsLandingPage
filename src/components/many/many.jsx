import React from "react";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import picture1 from "../../pictures/manyPicture1.jpg"
import picture2 from "../../pictures/manyPicture2.jpg"
import picture3 from "../../pictures/manyPicture3.jpg"

const Many = () => {
    return(
        <Container maxWidth="lg" sx={{ display:'block',
            height:"1176px" }}>
            <Grid container sx={{display:'block'}}>
                <Grid item xs={6} sx={{ display:"block", textAlign:'center', margin:'auto'}}>
                        <Typography sx={{
                            marginTop:'168px',
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            fontSize:"36px",
                            lineHeight:"150%",
                            letterSpacing: '-0.01em',
                            color: "#192252",
                        }}>
                            Many Rooms to Choose
                        </Typography>
                        <Typography sx={{
                            marginTop:'24px',
                            fontFamily: 'Inter',
                            fontWeight:400,
                            fontSize:"18px",
                            lineHeight:"150%",
                            color: "#848FAC",
                        }}>
                            There is a room for every needs. We have room for individuals until family size, we also have a cabin for more private experience
                        </Typography>
                        <button style={{
                            marginTop:'32px',
                            backgroundColor:"#0E1734",
                            color:"#FFFFFF",
                            fontFamily: 'Inter',
                            fontSize:"16px",
                            lineHeight: "19px",
                            width: "165px",
                            height: "51px",
                            borderRadius:"4px",
                        }}>
                            Explore more
                        </button>
                </Grid>
                <Grid container xs={12} sx={{ display:'flex', marginTop:'88px',justifyContent:"space-between"}}>
                    <Grid item xs={3} sx={{display:'block'}} >
                        <img src={picture1} alt="no picture"/>
                        <Typography sx={{
                            marginTop:'32px',
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            fontSize:"24px",
                            lineHeight:"150%",
                            color: "#000000",
                        }}>
                            Single Room
                        </Typography>
                        <Typography sx={{
                            marginTop:'16px',
                            fontFamily: 'Inter',
                            fontWeight:400,
                            fontSize:"18px",
                            lineHeight:"150%",
                            color: "#848FAC",
                        }}>
                            Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.
                        </Typography>
                        <Typography sx={{display:"flex", alignItems:'end'}}>
                            <a style={{
                                margin:'32px 13px 0px 0px',
                                color:"#424F7B",
                                fontFamily: 'Inter',
                                fontWeight:400,
                                fontSize:"18px",
                                lineHeight:"150%",
                                border:'0',
                            }}>
                                Learn more
                            </a>
                            <ArrowForwardIcon sx={{color:'#424F7B'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3}  >
                        <img src={picture2} alt="no picture"/>
                        <Typography sx={{
                            marginTop:'32px',
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            fontSize:"24px",
                            lineHeight:"150%",
                            color: "#000000",
                        }}>
                            Double Room
                        </Typography>
                        <Typography sx={{
                            marginTop:'16px',
                            fontFamily: 'Inter',
                            fontWeight:400,
                            fontSize:"18px",
                            lineHeight:"150%",
                            color: "#848FAC",
                        }}>
                            Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two
                        </Typography>
                        <Typography sx={{display:"flex", alignItems:'end'}}>
                            <a style={{
                                margin:'32px 13px 0px 0px',
                                color:"#424F7B",
                                fontFamily: 'Inter',
                                fontWeight:400,
                                fontSize:"18px",
                                lineHeight:"150%",
                                border:'0',
                            }}>
                                Learn more
                            </a>
                            <ArrowForwardIcon sx={{color:'#424F7B'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3}  >
                        <img src={picture3} alt="no picture"/>
                        <Typography sx={{
                            marginTop:'32px',
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            fontSize:"24px",
                            lineHeight:"150%",
                            color: "#000000",
                        }}>
                            Cootage
                        </Typography>
                        <Typography sx={{
                            marginTop:'16px',
                            fontFamily: 'Inter',
                            fontWeight:400,
                            fontSize:"18px",
                            lineHeight:"150%",
                            color: "#848FAC",
                        }}>
                            Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends
                        </Typography>
                    <Typography sx={{display:"flex", alignItems:'end'}}>
                        <a style={{
                            margin:'32px 13px 0px 0px',
                            color:"#424F7B",
                            fontFamily: 'Inter',
                            fontWeight:400,
                            fontSize:"18px",
                            lineHeight:"150%",
                            border:'0',
                        }}>
                            Learn more
                        </a>
                        <ArrowForwardIcon sx={{color:'#424F7B'}}/>
                    </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Many;
