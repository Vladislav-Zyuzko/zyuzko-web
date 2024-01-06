import HCDividerCss from './HCdivider.module.css';

function HCDivider (props: HCColorableProps) {
    return <div className={HCDividerCss.HCDivider} style={{ backgroundColor: `var(--${props.color})` }}/>
}

export default HCDivider;
