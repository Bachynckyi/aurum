import scss from "./ServicePage.module.scss";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import service10 from '../../images/services/service10.jpg';

const ServicePage8 = () => {

  return (
    <div className={scss.container}>
        <div className={scss.background_wrapper1}></div>
        <div className={scss.background_wrapper3}></div>
        <Header/>
        <div className={scss.content_wrapper}>
            <h1 className={scss.title}>Апаратна пресотерапія</h1>
            <img src={service10} alt='serviceImage' className={scss.image}/>
            <span className={scss.description}>Пресотерапія – це безболісна процедура, яка полягає у видаленні застою лімфи в певних зонах лімфатичної системи організму. Лімфодренаж здійснюється із застосуванням спеціального костюма, який стискає ділянки тіла за рахунок подачі в нього повітря. Пневмомасаж сприяє прискоренню обміну речовин в жирових тканинах, м’язових волокнах, покращує мікроциркуляцію крові, очищає і насичує лімфою шар шкіри.</span>
            <ul className={scss.description}>Показання для застосування пресотерапії:
                <li className={scss.description}>спазми в ногах;</li>
                <li className={scss.description}>набряки;</li>
                <li className={scss.description}>надмірна вага тіла;</li>
                <li className={scss.description}>венозна недостатність хронічного типу;</li>
                <li className={scss.description}>лімфоста;</li>
                <li className={scss.description}>профілактика варикозної хвороби;</li>
                <li className={scss.description}>післяопераційні або посттравматичні набряки;</li>
                <li className={scss.description}>стрес, безсоння;</li>
                <li className={scss.description}>відчуття втоми.</li>
            </ul>
        </div>
        <Footer/>
    </div>
        
  )
};

export default ServicePage8;