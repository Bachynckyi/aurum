import scss from "./ServicePage.module.scss";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import service5 from '../../images/services/service5.png';

const ServicePage5 = () => {

  return (
    <div className={scss.container}>
        <div className={scss.background_wrapper1}></div>
        <div className={scss.background_wrapper3}></div>
        <Header/>
        <div className={scss.content_wrapper}>
            <h1 className={scss.title}>Мануальна терапія хребта та суглобів</h1>
            <img src={service5} alt='serviceImage' className={scss.image}/>
            <span className={scss.description}>Мануальна терапія хребта та суглобів поєднує масаж, техніки м’язової релаксації, техніки мануальної тракції, кінезотерапію. Вона включає в себе поступове збільшення тяги на певні ділянки хребта за допомогою рук терапевта, розтягування хребта з метою поліпшення рухомості та зменшення болю для лікування розладів хребта, таких як спинальні грижі, сколіоз або грижа диска. Застосування тяги на м’язи та суглоби для поліпшення рухомості та зменшення болю. В терапії хребта та суглобів використовуються спеціальні техніки втирання мазей та олій, які виготовлені на основі природних речовин, які мають заспокійливий, знеболюючий, зігріваючий ефекти, покращують кровообіг, знімають набряки, покращують стан хрящової тканини.
                Використовуються методи фармакопунктури в терапії хребта та суглобів.
            </span>
        </div>
        <Footer/>
    </div>
        
  )
};

export default ServicePage5;