import React, {useState, useEffect} from 'react'
import Navbar from '../../components/marginals/Navbar'

import { makeStyles } from '@material-ui/core/styles';


export default function Placement() {
 const classes = useStyles();

 return(
  <>
   <Navbar />
   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>Chargebee</h1>
    <p>Women comprise 33% of our workforce. We are striving hard to improve this. Our strategy is to provide best-in-class physical and cultural infrastructure to support working women.</p>
    <a href='https://careers.chargebee.com/jobs/' style={{textAlign: 'right', color: '#fff'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>We Are Tech Women | Jobs Powered By JOBBIO</h1>
    <p>WeAreTheCity, WeAreTechWomen and our clients are equal opportunities employers. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>
    <a href='https://wearetechwomen.com/women-in-tech-jobs/' style={{textAlign: 'right', color: '#fff'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>Jobs For Her</h1>
    <p>This is your one-stop connection to the best jobs, women-friendly companies, hiring events across India, and more!</p>
    <a href='https://www.jobsforher.com/jobs' style={{textAlign: 'right', color: '#fff'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>A&S LGBTQIA Jobs</h1>
    <p>The LGBTQIA(lesbian, gay, bisexual, transgender, queer, intersex and ally) Scholarship is designed to support the students regardless of sexual orientation, gender identity and sex, who are enrolled in any degree programat UMKC, who maintains atleast a cumulative 2.0GPA</p>
    <a href='http://info.umkc.edu/lgbt/resources/scholarships/' style={{textAlign: 'right', color: '#fff'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>Nitros List of General Jobs for STEM  </h1>
    <p>It's probably not a newsflash that  women are still largely outnumbered by their male counterparts in science and engineering.

What might be news: More colleges and employers are making it a priority to get women into STEM fields—and they're making financial investments to back that up. That means there are ever-growing options for female students who are hunting for scholarships. Here's how to find that sweet "free money" to help fund your STEM education. </p>
    <a href='https://www.nitrocollege.com/blog/ultimate-guide-stem-scholarships' style={{textAlign: 'right', color: '#fff'}}>Learn More</a>
   </div>
   </div>
  </>
 )
}

const useStyles = makeStyles({
cards: {
 textAlign: 'center',
 backgroundColor: '#6b0f1a',
 backgroundImage: 'linear-gradient(315deg, #6b0f1a 0%, #b91372 74%)',
 padding: '2rem',
 margin: '1rem 2rem',
 boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
 borderRadius: '10px',
 color: '#fff'
}
});

// background-color: #6b0f1a;
// background-image: linear-gradient(315deg, #6b0f1a 0%, #b91372 74%);
