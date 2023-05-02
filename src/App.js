import './App.css';
import NavBar from './Bars/NavBar';
import LandingPage from './pages/LandingPage'; 
import AllCards from './Cards/AllCards';
import Page from './pages/page';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import Footer from './Bars/Footer';
import SecondFooter from './Bars/SecondFooter';
import Paper  from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


function App() {
  return (
    <div className="App">
    <Container max-width="xs">
    <NavBar/>
    <LandingPage/>
    <Page/>
    <AllCards/>
    <FirstPage/>
    <Grid Container spacing={4} justify="center">
       <Grid item xs={3} sm={6}>
       <Paper style={{height:75, width:100}}/>
       </Grid>
    </Grid>
    <Grid Container>
    <Grid item xs={3} sm={6}>
    <Paper style={{height:75, width:100}}/>
    </Grid>
 </Grid>
 <Grid Container>
 <Grid item xs={3} sm={6}>
 <Paper style={{height:75, width:100}}/>
 </Grid>
</Grid>
    <SecondPage/>
    <ThirdPage/>
    <Footer/>
    <SecondFooter/>
    </Container>
    </div>
  );
}

export default App;
