import sliderContents from '../../data/HCSliderContentData';
import HCTitle from '../HCTitle/HCTitle';
import HCSliderContent from '../HCSliderContent/HCSliderContent';
import HCSliderCss from './HCslider.module.css';

function HCSlider(props: HCTitleProps) {
    return <article className={HCSliderCss.sliderContainer}>
        <section className={HCSliderCss.sliderContent}>
            <HCTitle title={props.title} color={props.color} />
            <div className={HCSliderCss.sliderContentContainer}>
                {HCSliderContent(sliderContents[0])}
            </div>
        </section>
        <section className={HCSliderCss.sliderController}>
            
        </section>
    </article>
}

export default HCSlider;