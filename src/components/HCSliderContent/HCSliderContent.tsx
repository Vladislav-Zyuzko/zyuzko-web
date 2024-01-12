import HCSliderContentCss from './HCsliderContent.module.css';

function HCSliderContent(props: HCSliderContentProps) {
    return <section className={HCSliderContentCss.sliderContentContainer}>
        <div className={HCSliderContentCss.sliderContentAvatarContainer}>
            <div className={HCSliderContentCss.sliderContentAvatar}>
                <img src={props.avatarImage} alt="avatar-image" />
            </div>
            <div className={HCSliderContentCss.sliderContentAvatarDescription}>
                <h3>{props.avatarTitle}</h3>
                <p>{props.avatarSubtitle}</p>
            </div>
        </div>
        <p className={HCSliderContentCss.sliderContentText}>{props.contentText}</p>
    </section>
}

export default HCSliderContent;
