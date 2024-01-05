import HCDivider from '../HCDivider/HCDivider';
import HCTitleCss from './HCtitle.module.css';

function HCTitle (props: HCTitleProps) {
    return <div className={HCTitleCss.HCTitleContainer}>
        <div className={HCTitleCss.HCTitle}> 
            {props.title} 
        </div>
        <HCDivider />
    </div>
}

export default HCTitle;