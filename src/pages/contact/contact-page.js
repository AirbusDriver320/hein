import contactimg from '../../assets/contactme.jpg';

import './contact.styles.css';

export default function ContactPage() {

    return (
        <div className='contact-page'>
            <img src={contactimg} alt='' />
            <h1>I'd love to hear form you!</h1>
            <p>heindewaal@live.co.za</p>
            <a href='https://www.linkedin.com/in/heindewaal' target='_blank' rel='noreferrer'>https://www.linkedin.com/in/heindewaal</a>
            <p>Ceres, Western Cape, South Africa</p>        
        </div>
    )
}