import scss from './ReviewsSlider.module.scss';
import { ReactComponent as UserIcon} from "../../images/icon_user.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

const ReviewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "reviewsSlider",
    touchThreshold: 100,
  };

  return (
    <div className={scss.review_slider}>
        <Slider {...settings}>
          <div className={scss.slider_review_card}>
              <div className={scss.slider_review_user}>
                  <UserIcon/>
                  <span className={scss.slider_review_name}>Максим</span>
              </div>
              <span className={scss.slider_review_text}>Дуже задоволений реабілітаційним центром “Аурум”. Професійний та індивідуальний підхід до кожного пацієнта. Відчувається турбота лікарів та небайдужість до тебе, що теж сприяє покращенню стану та видужанню взагалі. Дуже цікава сама філософія реабілітації, для мене особисто це нова ера в реабілітації та лікуванні, і вона дає результат на оздоровленні та впевненість у собі.</span>
          </div>
          <div className={scss.slider_review_card}>
              <div className={scss.slider_review_user}>
                  <UserIcon/>
                  <span className={scss.slider_review_name}>Антон</span>
              </div>
              <span className={scss.slider_review_text}>Дуже задоволений реабілітаційним центром “Аурум”. Професійний та індивідуальний підхід до кожного пацієнта. Відчувається турбота лікарів та небайдужість до тебе, що теж сприяє покращенню стану та видужанню взагалі. Дуже цікава сама філософія реабілітації, для мене особисто це нова ера в реабілітації та лікуванні, і вона дає результат на оздоровленні та впевненість у собі.</span>
          </div>
          <div className={scss.slider_review_card}>
              <div className={scss.slider_review_user}>
                  <UserIcon/>
                  <span className={scss.slider_review_name}>Валерій</span>
              </div>
              <span className={scss.slider_review_text}>Дуже задоволений реабілітаційним центром “Аурум”. Професійний та індивідуальний підхід до кожного пацієнта. Відчувається турбота лікарів та небайдужість до тебе, що теж сприяє покращенню стану та видужанню взагалі. Дуже цікава сама філософія реабілітації, для мене особисто це нова ера в реабілітації та лікуванні, і вона дає результат на оздоровленні та впевненість у собі.</span>
          </div>
          <div className={scss.slider_review_card}>
              <div className={scss.slider_review_user}>
                  <UserIcon/>
                  <span className={scss.slider_review_name}>Василь</span>
              </div>
              <span className={scss.slider_review_text}>Дуже задоволений реабілітаційним центром “Аурум”. Професійний та індивідуальний підхід до кожного пацієнта. Відчувається турбота лікарів та небайдужість до тебе, що теж сприяє покращенню стану та видужанню взагалі. Дуже цікава сама філософія реабілітації, для мене особисто це нова ера в реабілітації та лікуванні, і вона дає результат на оздоровленні та впевненість у собі.</span>
          </div>
          <div className={scss.slider_review_card}>
              <div className={scss.slider_review_user}>
                  <UserIcon/>
                  <span className={scss.slider_review_name}>Катерина</span>
              </div>
              <span className={scss.slider_review_text}>Дуже задоволений реабілітаційним центром “Аурум”. Професійний та індивідуальний підхід до кожного пацієнта. Відчувається турбота лікарів та небайдужість до тебе, що теж сприяє покращенню стану та видужанню взагалі. Дуже цікава сама філософія реабілітації, для мене особисто це нова ера в реабілітації та лікуванні, і вона дає результат на оздоровленні та впевненість у собі.</span>
          </div>
          <div className={scss.slider_review_card}>
              <div className={scss.slider_review_user}>
                  <UserIcon/>
                  <span className={scss.slider_review_name}>Ганна</span>
              </div>
              <span className={scss.slider_review_text}>Дуже задоволений реабілітаційним центром “Аурум”. Професійний та індивідуальний підхід до кожного пацієнта. Відчувається турбота лікарів та небайдужість до тебе, що теж сприяє покращенню стану та видужанню взагалі. Дуже цікава сама філософія реабілітації, для мене особисто це нова ера в реабілітації та лікуванні, і вона дає результат на оздоровленні та впевненість у собі.</span>
          </div>
          <div className={scss.slider_review_card}>
              <div className={scss.slider_review_user}>
                  <UserIcon/>
                  <span className={scss.slider_review_name}>Сергій</span>
              </div>
              <span className={scss.slider_review_text}>Дуже задоволений реабілітаційним центром “Аурум”. Професійний та індивідуальний підхід до кожного пацієнта. Відчувається турбота лікарів та небайдужість до тебе, що теж сприяє покращенню стану та видужанню взагалі. Дуже цікава сама філософія реабілітації, для мене особисто це нова ера в реабілітації та лікуванні, і вона дає результат на оздоровленні та впевненість у собі.</span>
          </div>
          <div className={scss.slider_review_card}>
              <div className={scss.slider_review_user}>
                  <UserIcon/>
                  <span className={scss.slider_review_name}>Петро</span>
              </div>
              <span className={scss.slider_review_text}>Дуже задоволений реабілітаційним центром “Аурум”. Професійний та індивідуальний підхід до кожного пацієнта. Відчувається турбота лікарів та небайдужість до тебе, що теж сприяє покращенню стану та видужанню взагалі. Дуже цікава сама філософія реабілітації, для мене особисто це нова ера в реабілітації та лікуванні, і вона дає результат на оздоровленні та впевненість у собі.</span>
          </div>
          <div className={scss.slider_review_card}>
              <div className={scss.slider_review_user}>
                  <UserIcon/>
                  <span className={scss.slider_review_name}>Ігнат</span>
              </div>
              <span className={scss.slider_review_text}>Дуже задоволений реабілітаційним центром “Аурум”. Професійний та індивідуальний підхід до кожного пацієнта. Відчувається турбота лікарів та небайдужість до тебе, що теж сприяє покращенню стану та видужанню взагалі. Дуже цікава сама філософія реабілітації, для мене особисто це нова ера в реабілітації та лікуванні, і вона дає результат на оздоровленні та впевненість у собі.</span>
          </div>
        </Slider>
    </div>
  )
};

export default ReviewsSlider;