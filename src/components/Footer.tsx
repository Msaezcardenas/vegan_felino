import { PiTiktokLogoBold, PiInstagramLogo, PiWhatsappLogo, PiEnvelope } from 'react-icons/pi';
import { Wrapper } from '../Wrappers/Footer';

function Footer() {
  return (
    <Wrapper>
      <div className='footer-container'>
        <div className='custom-shape-divider'>
          <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
            <path
              d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
              className='shape-fill'
            ></path>
          </svg>
        </div>
        <div className='footer-contact'>
          <div className='contact'>
            <h4>Contacto</h4>
            <div>
              <PiEnvelope size={30} />
              felinovegano@gmail.com
            </div>
            <div>
              <PiWhatsappLogo size={30} />
              +56948951827
            </div>
          </div>
          <div className='rr-ss'>
            <h4>Siguenos!</h4>
            <div>
              <a href='https://www.instagram.com/veganfelino/' target='_blank' rel='noopener noreferrer' className='text-pink-600'>
                <PiInstagramLogo size={32} />
              </a>
              <a href='https://www.tiktok.com/@veganfelino?_t=8sLp1gMJYLW&_r=1' target='_blank' rel='noopener noreferrer' className='text-pink-600'>
                <PiTiktokLogoBold size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
