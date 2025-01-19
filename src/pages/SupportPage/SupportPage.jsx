import scss from './SupportPage.module.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import QR from "../../images/QR.png";
import { MdContentCopy } from "react-icons/md";

const SupportPage = () => {
  const { t } = useTranslation();
  const [currency, setCurrency] = useState("UAH");

  const onChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className={scss.container}>
          <div className={scss.content_wrapper}>
            <h1 className={scss.title}>{t("Support_title")}</h1>
            <div className={scss.input_wrapper}>
                <label className={scss.input_option} htmlFor="UAH"> 
                    <input
                        className={scss.radio_button}
                        type="radio"
                        id="UAH"
                        name="currency"
                        value="UAH"
                        onChange={onChange}
                        checked={currency === "UAH"}
                    />
                    <span className={scss.custom_button}></span>
                    <span className={scss.input_name}>UAH</span>
                </label>
                <label className={scss.input_option} htmlFor="USD"> 
                    <input
                        className={scss.radio_button}
                        type="radio"
                        id="USD"
                        name="currency"
                        value="USD"
                        onChange={onChange}
                    />
                    <span className={scss.custom_button}></span>
                    <span className={scss.input_name}>USD</span>
                </label>
                <label className={scss.input_option} htmlFor="EUR"> 
                    <input
                        className={scss.radio_button}
                        type="radio"
                        id="EUR"
                        name="currency"
                        value="EUR"
                        onChange={onChange}
                    />
                    <span className={scss.custom_button}></span>
                    <span className={scss.input_name}>EUR</span>
                </label>
                <label className={scss.input_option} htmlFor="GBP"> 
                    <input
                        className={scss.radio_button}
                        type="radio"
                        id="GBP"
                        name="currency"
                        value="GBP"
                        onChange={onChange}
                    />
                    <span className={scss.custom_button}></span>
                    <span className={scss.input_name}>GBP</span>
                </label>
            </div>
            <div className={scss.details_wrapper}>
                {currency === "UAH" ? (
                    <>
                    <ul className={scss.details_list}>
                        <li className={scss.details_item}>
                            <p className={scss.details_name}>{t("Support_name")}:</p>
                            <p>ГО ВСЕУКРАЇНСЬКА АСОЦІАЦІЯ ГЕМОКОРЕКЦІЇ ТА РЕАБІЛІТАЦІЇ <MdContentCopy/></p>
                        </li>
                        <li className={scss.details_item}>
                            <p className={scss.details_name}>{t("Support_code")}:</p>
                            <p>44903159</p>
                        </li>
                        <li className={scss.details_item}>
                            <p className={scss.details_name}>{t("Suppport_bank")}:</p>
                            <p>АТ КБ «ПриватБанк»</p>
                        </li>
                        <li className={scss.details_item}>
                            <p className={scss.details_name}>{t("Support_IBAN")} IBAN:</p>
                            <p>UA533052990000026003026235611</p>
                        </li>
                    </ul>
                    <h2 className={scss.subtitle}>{t("Support_Privat")}: АТ КБ «ПриватБанк»</h2>
                    <img src={QR} alt="QR" className={scss.qr_code}/>
                    </>
                ) : (
                    <>
                    
                    
                    </>
                )}
            </div>
          </div>
    </div> 
  )
};

export default SupportPage;

