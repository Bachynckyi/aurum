import scss from "./ServicePage.module.scss";
import service10 from '../../images/services/service10.jpg';

const ServicePage8 = () => {

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>Апаратна пресотерапія</h1>
            <div className={scss.content_wrapper}>
              <img src={service10} alt='serviceImage' className={scss.image}/>
              <div className={scss.subcontainer}>
                <span className={scss.description}>Пресотерапія – це безболісна процедура, яка полягає у видаленні застою лімфи в певних зонах лімфатичної системи організму. Лімфодренаж здійснюється із застосуванням спеціального костюма, який стискає ділянки тіла за рахунок подачі в нього повітря. Пневмомасаж сприяє прискоренню обміну речовин в жирових тканинах, м’язових волокнах, покращує мікроциркуляцію крові, очищає і насичує лімфою шар шкіри.</span>
                <ul className={scss.list}>Показання для застосування пресотерапії:
                    <li className={scss.item}>спазми в ногах;</li>
                    <li className={scss.item}>набряки;</li>
                    <li className={scss.item}>надмірна вага тіла;</li>
                    <li className={scss.item}>венозна недостатність хронічного типу;</li>
                    <li className={scss.item}>лімфоста;</li>
                    <li className={scss.item}>профілактика варикозної хвороби;</li>
                    <li className={scss.item}>післяопераційні або посттравматичні набряки;</li>
                    <li className={scss.item}>стрес, безсоння;</li>
                    <li className={scss.item}>відчуття втоми.</li>
                </ul>
              </div>
            </div>
          </div>
    </div>
        
  )
};

export default ServicePage8;