import { useState } from 'react';
import sliderContents from '../../data/HCSliderContentData';
import HCTitle from '../HCTitle/HCTitle';
import HCSliderContent from '../HCSliderContent/HCSliderContent';
import HCSliderCss from './HCslider.module.css';
import arrow from '../../assets/images/icons/arrow.svg';

function HCSlider(props: HCTitleProps) {
    const [currentIndex, changeCurrentIndex] = useState(0);
  
    const leftArrowHandleClick = () => {
      changeCurrentIndex(currentIndex - 1);
    };

    const rightArrowHandleClick = () => {
        changeCurrentIndex(currentIndex + 1);
    };

    return <article className={HCSliderCss.sliderContainer}>
        <section className={HCSliderCss.sliderContent}>
            <HCTitle title={props.title} color={props.color} />
            <div className={HCSliderCss.sliderContentContainer}>
                {HCSliderContent(sliderContents[currentIndex])}
            </div>
        </section>
        <section className={HCSliderCss.sliderController}>
            <button 
                className={HCSliderCss.sliderArrowButton} 
                onClick={currentIndex != 0 ? leftArrowHandleClick : undefined}
                style={currentIndex != 0 ? {opacity: 1.0,  cursor: 'pointer'} : {opacity: 0.4}}
            >
                <img src={arrow} alt="left-arrow" className={HCSliderCss.sliderArrow} id={HCSliderCss.leftSliderArrow}/>
            </button>
            <div className={HCSliderCss.sliderPoints}>
                {sliderContents.map((_, index) => 
                    <div className={HCSliderCss.sliderPoint} style={currentIndex == index ? {opacity: 1.0} : {opacity: 0.4}}></div>
                )}
            </div>
            <button 
                className={HCSliderCss.sliderArrowButton}
                onClick={currentIndex != sliderContents.length - 1 ? rightArrowHandleClick : undefined}
                style={currentIndex != sliderContents.length - 1 ? {opacity: 1.0,  cursor: 'pointer'} : {opacity: 0.4}}
            >
                <img src={arrow} alt="right-arrow" className={HCSliderCss.sliderArrow} />
            </button>
        </section>
    </article>
}

export default HCSlider;
