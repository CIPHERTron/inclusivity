import React, {useState, useEffect} from 'react'
import Navbar from '../../components/marginals/Navbar'
import Firebase from '../../config/Firebase'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export default function Profile(props) {
 const classes = useStyles();
 const {email, uid} = props;
 const [name, setName] = useState('')
 const [pronoun, setPronoun] = useState('')
 const [loading, setLoading] = useState(false)
 const items = [];

 const ref = Firebase.firestore().collection('users');

 function getUser() {
  setLoading(true)
  ref.onSnapshot((querySnapshot) => {
   querySnapshot.forEach((doc) => {
    items.push(doc.data())
    if(items[items.length-1].email === email)
    {
     setName(items[items.length-1].name);
     setPronoun(items[items.length-1].pronoun);
    }
   });
   console.log(name);
   console.log(pronoun);
   setLoading(false)
  });
 }

 const getUserDetails = () => {
  if(!loading)
  items.forEach((item, idx) => {
   if(item.email === email) {
    setName(item.name);
    console.log(item);
    setPronoun(item.pronoun);
   }
  })
 }

 useEffect(() => {
  getUser();
  getUserDetails();
 }, []);

 return(
  <>
   <Navbar />

   <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography variant="h4" className={classes.pos} color="textSecondary">
         Name: Pritish Samal
        </Typography>
        <Typography variant="h5" className={classes.title} color="textSecondary" gutterBottom>
         Email ID: pritish@gmail.com
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Pronoun: he/him
        </Typography>
        <Typography variant="h6" color="textSecondary">
         Unique ID: f6TMyfmAOcNHtTGQtvq0lws8VRw1
        </Typography>
      </CardContent>
    </Card>

  </>
 )
}

const useStyles = makeStyles({
 root: {
   maxWidth: 500,
   margin: '0 auto',
   marginTop: '15rem',
   textAlign: 'center',
   backgroundColor: '#7cffcb',
   backgroundImage: 'linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%)'

 },
 bullet: {
   display: 'inline-block',
   margin: '0 2px',
   transform: 'scale(0.8)',
 },
 title: {
 },
 pos: {
   marginBottom: 12,
 },
});