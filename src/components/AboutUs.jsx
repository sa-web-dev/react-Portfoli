import profilepic from './profilepic.jpg'

const AboutUs = () => {
    return (  
        <div className="row pt-5" id="about">


        <div className="col-sm-8 pt-5">
            
            <p className="center">
            Passion to learn and advance in the Machine Learning field. 
    <br/>
            <br/>
            Cell: (619) 885-9951<br/>
            Email: samuellaldama@gmail.com </p>
        </div>
        <div className="col-sm-3 pt-5">
            <span>
            <img src={profilepic}  className="img-fluid img-profile rounded-circle mx-auto mb-2 proimage" alt="..." />
            </span>
        </div>
        </div>
    );
}
 export default AboutUs