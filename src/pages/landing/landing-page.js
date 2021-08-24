import mongologo from '../../assets/mongodb.png';
import expresslogo from '../../assets/expressjs.svg';
import reactlogo from '../../assets/logo.svg';
import nodelogo from '../../assets/nodejs.svg';

import './landing-page.css';

function LandingPage() {

    return (
        <div className='landing'>
            <header className="landing-header">
                <div>
                    <img src={mongologo} className="logo" alt="logo" />
                    <img src={expresslogo} className="logo2" alt="logo" />
                    <img src={reactlogo} className="logo" alt="logo" />
                    <img src={nodelogo} className="logo2" alt="logo" />                    
                </div>
                <h5>Portfolio page for:</h5>
                <h1>Hein de Waal</h1>
                <h4>Full Stack MERN developer</h4>
            </header>           
        </div>

    )
}

export default LandingPage;