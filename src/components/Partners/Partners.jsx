import scss from './Partners.module.scss';
import Partner from '../../images/partners/parzival-zentrum.png';
import Partner1 from '../../images/partners/Academy.png';
import Partner2 from '../../images/partners/Association.jpg';
import Partner3 from '../../images/partners/Bakhmach.png';
import Partner4 from '../../images/partners/Best.png';
import Partner5 from '../../images/partners/Center.png';
import Partner6 from '../../images/partners/E+.jpg';
import Partner7 from '../../images/partners/EBA.jpg';
import Partner8 from '../../images/partners/Frida.jpg';
import Partner9 from '../../images/partners/MHP.png';
import Partner10 from '../../images/partners/MIRUM.png';
import Partner11 from '../../images/partners/MMH.png';
import Partner12 from '../../images/partners/MentalHealth.jpg';
import Partner13 from '../../images/partners/Montpellier.png';
import Partner14 from '../../images/partners/Smart.jpg';
import Partner15 from '../../images/partners/Wala.jpg';
import Partner16 from '../../images/partners/АРТ_А.jpg';
import Partner17 from '../../images/partners/Suziria.png';
import Partner18 from '../../images/partners/Dopomogator.png';
import Partner19 from '../../images/partners/Vertolet.png';
import Partner20 from '../../images/partners/KMH.jpg';
import Partner21 from '../../images/partners/helias.png';

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
        <li className={scss.partners_list_item}><img src={Partner19} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner20} alt="logo" className={scss.partner_logo}/></li>
        <li className={scss.partners_list_item}><img src={Partner21} alt="logo" className={scss.partner_logo}/></li>
    </ul>
  )
};

export default Partners;
