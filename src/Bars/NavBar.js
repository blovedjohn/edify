function NavBar(){
    return(
        <nav className="head">
        
             <div className="nav">
             <img src="https://estore.learnafricaplc.com/_next/image?url=https%3A%2F%2Fcdn.edtify.com%2Fs3-2022%2F8%2F2%2Fa635b240-35d0-11ed-8f0d-53b3b7c8bfac.png&w=64&q=75" className="nav" alt="" height="30%" width="30%"/>
             <p className="nav">Home</p>
            <a href="https://estore.learnafricaplc.com/library" id="nav-link" className="nav">Library</a>
                    
              </div>
                  <div className="nav-logreg">
                  <a href="https://estore.learnafricaplc.com/login" className="nav-logreg">Login</a>
                  <p className="nav-logreg" id="register">Register</p>
             </div>
     </nav>
)
}   
export default NavBar;