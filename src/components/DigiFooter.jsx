
const DigiFooter = () => {
    return (
        <>
        <footer className="footer text-center">
        <div className="container">
            <div className="row">
                {/* <!-- Footer Location--> */}
                <div className="col-lg-4 mb-5 mb-lg-0">
                   
                    <p className="lead mb-0">
                    
                        <br />
                       
                    </p>
                </div>
                {/* <!-- Footer Social Icons--> */}
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h5 className="text-white  mb-4">Around the Web</h5>
                    <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                </div>
                {/* <!-- Footer About Text--> */}
                <div className="col-lg-4">
                    <h5 className="mb-4">About</h5>
                    <p className="lead mb-0">
                        This is a simple portfolio page of Samuel Aldama.
                    </p>
                </div>
            </div>
        </div>


    </footer>
            {/* <!-- Copyright Section--> */}
          <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; Samuel Aldama 2022</small></div>
        </div>
        </>
     );
}
 
export default DigiFooter;
