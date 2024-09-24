import scss from './Partners.module.scss';
import Partner from '../../images/partners1/parzival-zentrum.png';
import Partner1 from '../../images/partners1/Academy.png';
import Partner2 from '../../images/partners1/Association.jpg';
import Partner3 from '../../images/partners1/Bakhmach.png';
import Partner4 from '../../images/partners1/Best.png';
import Partner5 from '../../images/partners1/Center.png';
import Partner6 from '../../images/partners1/E+.jpg';
import Partner7 from '../../images/partners1/EBA.jpg';
import Partner8 from '../../images/partners1/Frida.jpg';
import Partner9 from '../../images/partners1/MHP.png';
import Partner10 from '../../images/partners1/MIRUM.png';
import Partner11 from '../../images/partners1/MMH.png';
import Partner12 from '../../images/partners1/MentalHealth.jpg';
import Partner13 from '../../images/partners1/Montpellier.png';
import Partner14 from '../../images/partners1/Smart.jpg';
import Partner15 from '../../images/partners1/Wala.jpg';
import Partner16 from '../../images/partners1/АРТ_А.jpg';
import Partner17 from '../../images/partners1/Suziria.png';
import Partner18 from '../../images/partners1/Dopomogator.png';

const Partners = () => {
  return (
    <ul className={scss.partners_list}>
        <li className={scss.partners_list_item}><img src={Partner} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner1} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner2} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner3} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner4} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner5} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner6} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner7} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner8} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner9} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner10} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner11} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner12} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner13} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner14} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner15} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner16} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner17} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner18} alt="logo" className={scss.partner_logo}/></li>
    </ul>
  )
};

export default Partners;
