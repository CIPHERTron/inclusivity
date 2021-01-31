import React, {useState, useEffect} from 'react'
import Navbar from '../../components/marginals/Navbar'

import { makeStyles } from '@material-ui/core/styles';


export default function Fellowship() {
 const classes = useStyles();

 return(
  <>
   <Navbar />
   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>WiST FELLOWSHIP</h1>
    <p>To drive transformative growth opportunities for women at all stages of their careers throughout the sports tech and innovation landscape, while also introducing middle and high school young women to the wide array of career paths in the industry.</p>
    <a href='https://www.womeninsportstech.org/wist-fellowships' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>MLH Fellowship Program</h1>
    <p>The MLH Fellowship is a 12-week internship alternative for aspiring software engineers. Our programs pair fun, educational curriculum with practical experience that you can put on your resume right away. It's collaborative, remote, and happens under the guidance of expert mentors.</p>
    <a href='https://fellowship.mlh.io/' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>Cybersecurity Talent Initiative </h1>
    <p>The Cybersecurity Talent Initiative is recruiting our nation’s next cadre of cybersecurity leaders to protect the digital infrastructure from global threats. The program offers recent graduates in cybersecurity-related fields a unique opportunity to jump-start their professional lives and get up to $75,000 in student loan assistance. With opportunities for public and private sector work experience along with leadership development training, participants make an immediate difference protecting the nation and digital economy, while also accelerating their careers as cybersecurity leaders.</p>
    <a href='https://cybertalentinitiative.org/why-apply/' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>Management Leaders of Tomorrow</h1>
    <p>There's never been a better time to become a software engineer. Not only do these roles pay well, but the career path is highly mobile and the work often focuses on problem solving and innovation. Learn how MLT can help you break into this exciting industry. Some key facts for consideration: </p>
    <a href='https://info.mlt.org/swe?fbclid=IwAR3hJltNfImMSsm4mWeyGwo6erUVeNOawfy2pC0agfbMHwnv0u8lsOO2QPE' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>2021 Uber Career Prep Fellows Program - Software Engineering</h1>
    <p>With the Career Prep Program, we ignite opportunity by setting careers in motion for all. The mission of the program is to raise transparency around the steps necessary for embarking on a STEM career for traditionally underrepresented groups in tech and increase their representation in the industry.

We encourage people from all backgrounds who seek to further this mission to apply.</p>
    <a href='https://university-uber.icims.com/jobs/65560/job?iis=marketing&iisn=Linkedin&iisp=paid&linkedin_sponsored=sponsored&rx_campaign=Linkedin1&rx_group=1462&rx_job=65560&rx_medium=post&rx_r=none&rx_source=Linkedin&rx_ts=20210130T191507Z&rx_viewer=f48aeff6635811eba62b430d5f4cc442929ecec6a3054f42ac0e51b5333b3f21&mobile=true&width=414&height=623&bga=true&needsRedirect=false&jan1offset=-300&jun1offset=-240&fbclid=IwAR2X7Bi8ptx2PuPsc9xvCtCUIWaiIy1JF4g0mFCeSsqaZDKZyuSirPhfEM8' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>CodeDay Labs Online Tech Internship for Everyone</h1>
    <p>There's never been a better time to become a software engineer. Not only do these roles pay well, but the career path is highly mobile and the work often focuses on problem solving and innovation. Learn how MLT can help you break into this exciting industry. Some key facts for consideration: </p>
    <a href='https://labs.codeday.org/' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>Data Science For All / Empowerment Program</h1>
    <p>Data Science For All / Empowerment offers the best data analytics training in the world.

AI is changing jobs in every industry and accessing the jobs of tomorrow requires data fluency.

Our program, taught by instructors from top universities like Harvard and MIT, is an immersive 13-week (Saturdays only, 10AM-8PM ET) training program in practical data skills. Entry is merit-based, competitive, and open only to traditionally under-represented students & working professionals.

Graduates are connected to the jobs of tomorrow in technology, finance, consulting, sales, marketing, engineering, research, product, and entrepreneurship.</p>
    <a href='https://c1-web.correlation-one.com/ds4a-empowerment' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>
  </>
 )
}

const useStyles = makeStyles({
cards: {
 textAlign: 'center',
 backgroundColor: '#eec0c6',
 backgroundImage: 'linear-gradient(315deg, #eec0c6 0%, #e58c8a 74%)',
 padding: '2rem',
 margin: '1rem 2rem',
 boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
 borderRadius: '10px'
}
});