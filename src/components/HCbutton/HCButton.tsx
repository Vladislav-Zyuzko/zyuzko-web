import HCButtonCss from './HCbutton.module.css';

function HCButton (props: HCButtonProps){
    return (
        <button className={props.isOutlined ? HCButtonCss.outlinedButton : HCButtonCss.fillButton}>
            {props.title}
            {typeof props.icon === "string" && <img src={props.icon} alt="button-icon" className={HCButtonCss.HCicon} />}
        </button>
    );
}

export default HCButton;