import scss from './Footer.module.scss';
import { ReactComponent as MapIcon } from '../../images/map_icon.svg';
import { ReactComponent as PhoneIcon } from '../../images/phone_icon.svg';
import { ReactComponent as EmailIcon } from '../../images/email_icon.svg';
import { ReactComponent as AurumLogoSmall } from '../../images/Aurum_logo_small.svg';
import { ReactComponent as Visa } from '../../images/visa_icon.svg';
import { ReactComponent as Mastercard } from '../../images/mastercard_icon.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
const todayDate = new Date();
const currentYear = todayDate.getFullYear();
  

  return (
    <footer className={scss.footer_container}>
        <div className={scss.footer_wrapper}> 
            <div className={scss.main_wrapper}>
                <div className={scss.contacts_wrapper}>
                    <p className={scss.contacts_title}>Контакти</p>
                    <div className={scss.contacts_info}>
                        <MapIcon/>
                        <address>
                            <Link className={scss.contacts_text} 
                            to="https://www.google.com.ua/maps/place/Medychnyy+Tsentr+Aurum/@50.4352488,30.5421546,63m/data=!3m1!1e3!4m15!1m8!3m7!1s0x40d4cf08157edd2d:0xc35f243ceeae5712!2z0YPQuy4g0KDQtdC30L3QuNGG0LrQsNGPLCAxMSwg0JrQuNC10LIsIDAyMDAw!3b1!8m2!3d50.4352612!4d30.5424696!16s%2Fg%2F1tg6nn5q!3m5!1s0x40d4cf0b82de2b71:0x5046d5f64ce3f501!8m2!3d50.4353876!4d30.5422401!16s%2Fg%2F11vlt3dn94?hl=ru&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
                            target='_blank'
                            >м. Київ, вул. Різницька, 11</Link>
                        </address>
                    </div>
                    <div className={scss.contacts_info}>
                        <PhoneIcon/>
                        <a className={scss.contacts_text} href="tel: +380 (98) 419-03-43">+380 (98) 419-03-43</a>
                    </div>
                    <div className={scss.contacts_info}>
                        <EmailIcon/>
                        <a className={scss.contacts_text} href="mailto: info@clinic-aurum.com">info@clinic-aurum.com</a>
                    </div>
                    <div className={scss.contacts_services}>
                        <div className={scss.contacts_service}>
                            <Mastercard/>
                        </div>
                        <div className={scss.contacts_service}>
                            <Visa className={scss.visa}/>
                        </div>
                    </div>
                </div>
                <div className={scss.services_container}>
                    <p className={scss.services_title}>Реабілітаційна програма</p>
                    <ul className={scss.services_list}>
                        <li>
                            <Link className={scss.services_item}>Консультативний огляд лікаря</Link>
                        </li>
                        <li>
                            <Link className={scss.services_item}>Консультація психолога</Link>
                        </li>
                        <li>
                            <Link className={scss.services_item}>Постізометрична релаксація</Link>
                        </li>
                        <li>
                            <Link className={scss.services_item}>Рефлексотерапія</Link>
                        </li>
                        <li>
                            <Link className={scss.services_item}>Мануальна терапія</Link>
                        </li>
                        <li>
                            <Link className={scss.services_item}>Ритмічне втирання</Link>
                        </li>
                        <li>
                            <Link className={scss.services_item}>Кінезіотерапія</Link>
                        </li>
                        <li>
                            <Link className={scss.services_item}>Гідрокінезіотерапія</Link>
                        </li>
                        <li>
                            <Link className={scss.services_item}>Масляно-дисперсійні ванни</Link>
                        </li>
                        <li>
                            <Link className={scss.services_item}>Апаратна пресотерапія</Link>
                        </li>
                    </ul>
                </div>
                <div className={scss.logo_container}>
                    <AurumLogoSmall className={scss.logo}/>
                    <div className={scss.politics_license_wrapper_desktop}>
                        <p className={scss.license}>Ліц. МОЗ України №1603 від 11.09.2023</p>
                        <p className={scss.license}>© Медичний центр Аурум {currentYear}</p>
                    </div>
                </div>
            </div>
            <div className={scss.politics}>
                <div className={scss.politics_license_wrapper}>
                    <p className={scss.license}>Ліц. МОЗ України №1603 від 11.09.2023</p>
                    <p className={scss.license}>© Медичний центр Аурум {currentYear}</p>
                </div>
                <div className={scss.politics_services}>
                    <div className={scss.politics_service}>
                        <Mastercard/>
                    </div>
                    <div className={scss.politics_service}>
                        <Visa className={scss.visa}/>
                    </div>
                </div>
            </div>  
        </div>
    </footer>
        
  )
};

export default Footer;