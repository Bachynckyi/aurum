import scss from './SupportPage.module.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import QR from "../../images/QR.png";
import { MdContentCopy } from "react-icons/md";
import copy from 'copy-to-clipboard';
import Notiflix from 'notiflix';

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
                            <p className={scss.details_data}>
                                <span className={scss.details_text}>ГО ВСЕУКРАЇНСЬКА АСОЦІАЦІЯ ГЕМОКОРЕКЦІЇ ТА РЕАБІЛІТАЦІЇ</span>
                                <MdContentCopy className={scss.icon_copy} onClick={() => {
                                    copy("ГО ВСЕУКРАЇНСЬКА АСОЦІАЦІЯ ГЕМОКОРЕКЦІЇ ТА РЕАБІЛІТАЦІЇ"); 
                                    Notiflix.Notify.success(t("Support_notiflix_clipboard"), {timeout: 5000, position: "center-top", showOnlyTheLastOne: true});
                                }}/>   
                            </p>
                        </li>
                        <li className={scss.details_item}>
                            <p className={scss.details_name}>{t("Support_code")}:</p>
                            <p className={scss.details_data}>
                                <span className={scss.details_text}>44903159</span>
                                <MdContentCopy className={scss.icon_copy} onClick={() => {
                                    copy("44903159"); 
                                    Notiflix.Notify.success(t("Support_notiflix_clipboard"), {timeout: 5000, position: "center-top", showOnlyTheLastOne: true});
                                }}/> 
                            </p>
                        </li>
                        <li className={scss.details_item}>
                            <p className={scss.details_name}>{t("Suppport_bank")}:</p>
                            <p className={scss.details_data}>
                                <span className={scss.details_text}>АТ КБ «ПриватБанк»</span>
                                <MdContentCopy className={scss.icon_copy} onClick={() => {
                                    copy("АТ КБ «ПриватБанк»"); 
                                    Notiflix.Notify.success(t("Support_notiflix_clipboard"), {timeout: 5000, position: "center-top", showOnlyTheLastOne: true});
                                }}/> 
                            </p>
                        </li>
                        <li className={scss.details_item}>
                            <p className={scss.details_name}>{t("Support_IBAN")} IBAN:</p>
                            <p className={scss.details_data}>
                                <span className={scss.details_text}>UA533052990000026003026235611</span>
                                <MdContentCopy className={scss.icon_copy} onClick={() => {
                                    copy("UA533052990000026003026235611"); 
                                    Notiflix.Notify.success(t("Support_notiflix_clipboard"), {timeout: 5000, position: "center-top", showOnlyTheLastOne: true});
                                }}/> 
                            </p>
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

