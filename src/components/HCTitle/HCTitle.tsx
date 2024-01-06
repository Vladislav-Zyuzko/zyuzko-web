import HCDivider from '../HCDivider/HCDivider';
import HCTitleCss from './HCtitle.module.css';

function HCTitle (props: HCTitleProps) {
    return <div className={HCTitleCss.HCTitleContainer}>
        <div className={HCTitleCss.HCTitle} style={{ color: `var(--${props.color})` }}>
            {props.title} 
        </div>
        <HCDivider color={props.color}/>
    </div>
}

export default HCTitle;