import scss from './Footer.module.scss';
import { ReactComponent as MapIcon } from '../../images/map_icon.svg';
import { ReactComponent as PhoneIcon } from '../../images/phone_icon.svg';
import { ReactComponent as EmailIcon } from '../../images/email_icon.svg';
import { ReactComponent as AurumLogoSmall } from '../../images/Aurum_logo_small.svg';
import { ReactComponent as Visa } from '../../images/visa_icon.svg';
import { ReactComponent as Mastercard } from '../../images/mastercard_icon.svg';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className={scss.footer_container}>
        <div className={scss.contacts}>
            <div className={scss.contacts_wrapper}>
                <p className={scss.contacts_title}>Контакти</p>
                <div className={scss.contacts_info}>
                    <MapIcon/>
                    <address className={scss.contacts_text}>м. Київ, вул. Різницька, 11</address>
                </div>
                <div className={scss.contacts_info}>
                    <PhoneIcon/>
                    <a className={scss.contacts_text} href="tel: +380 (98) 419-03-43">+380 (98) 419-03-43</a>
                </div>
                <div className={scss.contacts_info}>
                    <EmailIcon/>
                    <a className={scss.contacts_text} href="mailto: info@clinic-aurum.com">info@clinic-aurum.com</a>
                </div>
            </div>
            <AurumLogoSmall className={scss.logo}/>
        </div>
        <div className={scss.services}>
            <p className={scss.services_title}>Реабілітаційна програма</p>
            <ul className={scss.services_list}>
                <li>
                    <Link className={scss.services_item}>Консультативний огляд лікаря</Link>
                </li>
                <li>
                    <Link className={scss.services_item}>Консультація психолога</Link>
                </li>
                <li>
                    <Link className={scss.services_item}>Мануальна терапія</Link>
                </li>
                <li>
                    <Link className={scss.services_item}>Масляно-дисперсійні ванни</Link>
                </li>
                <li>
                    <Link className={scss.services_item}>Ритмічні втирання</Link>
                </li>
                <li>
                    <Link className={scss.services_item}>Апаратна пресотерапія</Link>
                </li>
            </ul>
        </div>
        <div className={scss.politics}>
            <div className={scss.politics_license_wrapper}>
                <p className={scss.license}>Ліц. МОЗ України №1603 від 11.09.2023</p>
                <p className={scss.license}>© Медичний центр Аурум 2023</p>

            </div>
            <div className={scss.politics_services}>
                <div className={scss.politics_service}>
                    <Mastercard/>
                </div>
                <div className={scss.politics_service}>
                    <Visa/>
                </div>
            </div>
        </div>
    </footer>
        
  )
};

export default Footer;