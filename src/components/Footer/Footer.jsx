import scss from './Footer.module.scss';

const Footer = () => {

  return (
    <footer className={scss.container}>
        <div className={scss.contact_details}>
            <p>Контакти</p>
            <address>
                
                <span>м. Київ, вул. Різницька, 11</span>
            </address>
            <div>
                <a href="tel: +380 (98) 419-03-43">+380 (98) 419-03-43</a>
            </div>
            <div>
                <a href="mailto: info@clinic-aurum.com">info@clinic-aurum.com</a>
            </div>
        </div>


    </footer>
        
  )
};

export default Footer;