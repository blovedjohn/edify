        function ThirdPage(){
                 return(
                    <div className="third">
                
                <div className="info">
                    <h1 className="why-us">Why us?</h1>
                    <h1 className="what">What you need to <br/> know as our <span style={{color: 'darkblue'}}>Reader</span></h1>
                </div>


                      <div className="info1">

                        <div className="guideds">
                             <img src="./image/iconfinders.png" alt="" width="25px" id="images"/>
                             <p id="mission">Our Mission</p>
                      </div>
                          <p className="p-tag">To deliver innovative learning solutions <br/> that improve learning outcomes</p>
               </div>


                          <div className="info2">
                               <div className="guided">
                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPUsoSk4Oq6SXSMlRVBgoTsfDu21X4pM7xw&usqp=CAU" width="10%" className="image2"/>
                               <p id="mission">Modular Learning</p>
                         </div>
                              <p>We have divided our content into small <br/> modules to provide a simpler and <br/> more manageable learning <br/> experience.</p>
                   </div>


                   <div className="info3">
                       
                      <div className="guided">
                           <img src="./image/PNGwings.png" alt="" className="image2" height="5px" width="10px"/>
                           <p id="mission">Guided Assessments</p>
                      </div>
                          <p>Assigning projects to students during <br/> and after learning helps evaluate their <br/> comprehension of the course prior to <br/> certification.</p>
                     </div>
           </div>
    )
}
export default ThirdPage;