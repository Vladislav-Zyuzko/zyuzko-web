import HCTitle from '../HCTitle/HCTitle';
import HCSliderCss from './HCslider.module.css';

function HCSlider(props: HCTitleProps) {
    return <article>
        <HCTitle title={props.title} color={props.color} />
    </article>
}

export default HCSlider;