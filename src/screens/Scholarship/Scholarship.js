import React, {useState, useEffect} from 'react'
import Navbar from '../../components/marginals/Navbar'

import { makeStyles } from '@material-ui/core/styles';


export default function Scholarship() {
 const classes = useStyles();

 return(
  <>
   <Navbar />
   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>Adobe Research Scholarship</h1>
    <p>Here at Adobe Research we create innovative technologies for our software products to better serve consumers, creative professionals, developers, and enterprises. We bring together the smartest, most driven people we can find, and we give them the freedom to nurture their intellectual curiosity, while providing them the necessary resources and support to shape their ideas into tangible results. One part of creating the best products is bringing a diverse group of people together. To bring more gender diversity to the technology industry, we are pleased to invite applications to the Adobe Research Women-in-Technology Scholarship.</p>
    <a href='https://research.adobe.com/scholarship/' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>10,000 Degrees Sonoma County LGBT Rainbow Scholarship</h1>
    <p>LGBTQI students must be Sonoma country residents when they apply. Awards based on Financial needs, demonstrated perseverance and motivation to attend and complete post-secondary school</p>
    <a href='http://www.10000degrees.org/' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>Nutanix Heart Women In Technology Scholarship</h1>
    <p>Nutanix strongly believes in the power of diversity and we want to increase the ratio of women on our engineering teams. So, we’re creating scholarships to help young women develop the skills they need to pursue their passion of computer science. We are offering up to twelve scholarship to female students in the United States, France, Netherland, India and Serbia who want to apply their love of technology to make a positive impact on the industry and planet.</p>
    <a href='https://www.nutanix.com/scholarships' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>A&S LGBTQIA Scholarship</h1>
    <p>The LGBTQIA(lesbian, gay, bisexual, transgender, queer, intersex and ally) Scholarship is designed to support the students regardless of sexual orientation, gender identity and sex, who are enrolled in any degree programat UMKC, who maintains atleast a cumulative 2.0GPA</p>
    <a href='http://info.umkc.edu/lgbt/resources/scholarships/' style={{textAlign: 'right'}}>Learn More</a>
   </div>
   </div>

   <div style={{display: 'flex', flexDirection: 'column'}}>
   <div className={classes.cards}>
    <h1>Palantir Women In Technology Scholarship, North America
</h1>
    <p>We launched the Palantir Women in Technology Scholarship in 2010 to support and celebrate women who are beginning careers in technology. We hope to encourage women to pursue computer science, engineering, and technical studies, and to become leaders in these fields.

This year, 10 scholarship recipients will be chosen and invited to a virtual developmental workshop. Programming will include professional development sessions and breakout discussions with our engineers. All recipients will be awarded grants of $7,000 to support their education.</p>
    <a href='https://www.palantir.com/students/scholarship/wit-north-america/' style={{textAlign: 'right'}}>Learn More</a>
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