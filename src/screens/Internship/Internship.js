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
    <h1>Google STEP Intern</h1>
    <p>STEP (Student Training in Engineering Program), formerly known as Engineering Practicum, is a 12-week internship for first and second-year undergraduate students with a passion for computer science. The internship program has a focus of providing development opportunities to students from groups historically underrepresented in tech, through technical training and professional development.</p>
    <a href='https://buildyourfuture.withgoogle.com/programs/step/' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>Microsoft Codess</h1>
    <p>Codess is a global platform by Microsoft to encourage women in the field of technology. In India too they host networking events for female engineering students to network, learn from each other and receive mentorship from Microsoft Employees</p>
    <a href='https://www.codess.net/' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>Adobe #SheCodes </h1>
    <p>The Adobe India Women-in-Technology Scholarship, is striving towards creating gender equality in science, technology and engineering domains by encouraging women to showcase their excellence in computing and technology and become future leaders and role models in the field. </p>
    <a href='https://research.adobe.com/adobe-india-women-in-technology-scholarship/' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

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
    <h1>DEPARTMENT OF GENDER, WOMEN & SEXUALITY STUDIES</h1>
    <p>The list of internship sites presented below is suggestive, rather than comprehensive. Most of the sites are places where a Gender, Women & Sexuality Studies student has already done an internship. Where possible, we have provided a link to the site's home page or volunteer information page. Please see the GWSS Adviser for more information.</p>
    <a href='https://gwss.washington.edu/internship-sites' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>CodeDay Labs Online Tech Internship for Everyone</h1>
    <p>There's never been a better time to become a software engineer. Not only do these roles pay well, but the career path is highly mobile and the work often focuses on problem solving and innovation. Learn how MLT can help you break into this exciting industry. Some key facts for consideration: </p>
    <a href='https://labs.codeday.org/' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>
  </>
 )
}

const useStyles = makeStyles({
cards: {
 textAlign: 'center',
 backgroundColor: '#e899dc',
 backgroundImage: 'linear-gradient(315deg, #e899dc 0%, #d387ab 74%)',
 padding: '2rem',
 margin: '1rem 2rem',
 boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
 borderRadius: '10px'
}
});
