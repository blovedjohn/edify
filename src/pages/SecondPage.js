import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AlarmIcon from '@mui/icons-material/Alarm';
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';


        function SecondPage(){
              return(
                 <div className="second">

                        <div className="image1">
                             <h3 className="join">Join the list for publication</h3>
                                  
                                 <div className='stay'>
                                      <p><WorkHistoryRoundedIcon className='icon'/><br/> Stay</p>
                                      <p className="knowledgeable"> knowledgeable</p>
                                 </div>
                      </div>
                  
                                          <div className="second-details">
                                                 <h1 className="second-headline">Stay in-touch With the Best Always</h1>
                                                 <p className='style'><AutoStoriesIcon className='icons'/>Top publication</p>
                                                 <p className='style'><AlarmIcon className='icons'/>Read anytime and anywhere.</p>
                                                <p className='style'><WorkHistoryRoundedIcon className='icons'/>Smart reading.</p>
                                               <p className='style'><RecentActorsRoundedIcon className='icons'/>Drop reviews and feedback while reading</p>
                                        </div>
                      </div>
    )
}

export default SecondPage;