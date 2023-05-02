import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';

function LandingPage(){
    return(
        <nav className="general">
      <div className="landing-page">
          <h1 className="welcome">Welcome to Learn Africa E- <br/>Store</h1>
          <p className="landing">Access thousands of school textbooks <br/> and learning materials online.</p>
          <p className="fee">Get started for #500 monthly</p>
          </div>
          <div className="texbook-image">
          <p className="access">Access the best <br/> anywhere and <br/> anytime</p>
          <div className='material-ui'>
          <p><RecentActorsRoundedIcon className='icons'/></p> 
          <p><RecentActorsRoundedIcon className='icons'/></p>
          <p className='icons2'>+98</p>
          </div>

          <div className='compatible'> 
          <p id='auto'><AutoStoriesIcon className="icons"/></p>
          <p id='compat'>compatible on <br/> all device</p>
          </div>
          </div>
         
      </nav>
        )
}
export default LandingPage;