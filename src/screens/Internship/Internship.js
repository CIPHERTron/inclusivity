import React, {useState, useEffect} from 'react'
import Navbar from '../../components/marginals/Navbar'

import { makeStyles } from '@material-ui/core/styles';


export default function Internship() {
 const classes = useStyles();

 return(
  <>
   <Navbar />
   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>FII’s Internship Programs</h1>
    <p>Feminism In India (FII) is an award-winning digital intersectional feminist platform to learn, educate and develop a feminist sensibility and unravel the F-word among the youth in India. It aims to become a one-stop platform for everything related to feminism in India. FII offers full-time office based paid internships and part-time online unpaid internships. The internships are open to both students and young professionals. Read closely before applying!</p>
    <a href='https://feminisminindia.com/intern-with-feminism-in-india-fii/' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>Internships - Women and Gender Studies</h1>
     <p>NOW is the largest, most comprehensive feminist advocacy group in the United States with hundreds of thousands of contributing members and hundreds of state and local chapters across all 50 states and the District of Columbia. Our mission is to bring women into full participation in society – sharing equal rights, responsibilities and opportunities with men, while living free from discrimination.

Each semester NOW interns participate in a wide range of activities that provide them with the tools and knowledge to become activist leaders</p>
    <a href='https://wmst.gmu.edu/undergraduate/internships' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>INTERNSHIPS | The Department of Gender & Women's Studies</h1>
    <p>Internships offer students opportunities for hands-on experience in service, organizing, politics, journalism, art, and other venues.  The GWS Internship program allows students to pursue these hands-on experiences while receiving credit toward their degree by enrolling in GWS 393.

For more information, or to discuss internship ideas, email or make an appointment to speak with Professor Michelle Berry the GWS Internship Coordinator.</p>
    <a href='https://gws.arizona.edu/UndergradInternships' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>2020 LGBTQ Health Internship Application | Program for LGBTQ Health</h1>
    <p>Each summer, the program hosts one intern specific to the Trans Buddy Program. People interested in this internship opportunity should apply specifically through the Civil Liberties and Public Policy’s (CLPP) summer internship, also known as the Reproductive Rights Activist Service Corps (RRASC). While our Trans Buddy intern comes to us directly through CLPP, applying to this internship program does not guarantee a placement with Trans Buddy.</p>
    <a href='https://www.vumc.org/lgbtq/2020-lgbtq-health-internship-application' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1></h1>
    <p>The list of internship sites presented below is suggestive, rather than comprehensive. Most of the sites are places where a Gender, Women & Sexuality Studies student has already done an internship. Where possible, we have provided a link to the site's home page or volunteer information page. Please see the GWSS Adviser for more information.</p>
    <a href='https://gwss.washington.edu/internship-sites' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>A. Gordon Rose Scholarship</h1>
    <p>Funds scholarships for CPS graduate psychology student committed to research and professional work to increase self and community acceptance for gay people.</p>
    <a href='https://psychology.nova.edu/common-pdf/students/scholarships-rose.pdf' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>POINT Scholarship</h1>
    <p>Point Foundation (Point) is the nation’s largest higher education scholarship-granting organization for lesbian, gay, bisexual, transgender, and queer (LGBTQ) students. Point’s multifaceted support of its scholarship recipients (“scholars”) extends far beyond direct financial contribution toward the cost of their education. Each scholar is paired with a mentor and participates in leadership development programs and events.</p>
    <a href='https://pointfoundation.org/thepoint/scholarship/' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>Nitros List of General Scholarships for STEM  </h1>
    <p>It's probably not a newsflash that  women are still largely outnumbered by their male counterparts in science and engineering.

What might be news: More colleges and employers are making it a priority to get women into STEM fields—and they're making financial investments to back that up. That means there are ever-growing options for female students who are hunting for scholarships. Here's how to find that sweet "free money" to help fund your STEM education. </p>
    <a href='https://www.nitrocollege.com/blog/ultimate-guide-stem-scholarships' style={{textAlign: 'right'}}>Learn More</a>
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