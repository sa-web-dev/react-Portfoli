const DigiNav = () => {


    return (
        <nav className="navbar navbar-dark navbar-expand-sm fixed-top" style={{backgroundColor:'grey'}}>
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"> </span>
            </button>
         
           <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><a className="nav-link" href="#"><span className="fa fa-home fa-lg"></span> About</a></li>
         
                    <li className="nav-item"><a className="nav-link" href="#projects"><span className="fa fa-info fa-lg"></span> Projects</a></li>

                    <li className="nav-item"><a className="nav-link" href="#contact"><span className="fa fa-address-card fa-lg"></span> Contact Me</a></li>
                 </ul>    
               
               
                </div>
        </div>


    </nav>
     );
}
 
export default DigiNav;
