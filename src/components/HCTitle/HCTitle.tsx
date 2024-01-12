import HCDivider from '../HCDivider/HCDivider';
import HCTitleCss from './HCtitle.module.css';

function HCTitle (props: HCTitleProps) {
    return <div className={HCTitleCss.HCTitleContainer}>
        <h1 className={HCTitleCss.HCTitle} style={{ color: `var(--${props.color})` }}>
            {props.title} 
        </h1>
        <HCDivider color={props.color}/>
    </div>
}

export default HCTitle;
