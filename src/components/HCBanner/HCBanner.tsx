import HCButton from '../HCbutton/HCButton';
import HCBunnerCss from './HCbanner.module.css';

function HCBanner(props: HCBannerProps) {
    return <section className={props.isMainBanner ? HCBunnerCss.mainBanner : HCBunnerCss.banner}>
        <div>
            <div className={HCBunnerCss.bannerTitle}>
                {props.title}
            </div>
            <div className={HCBunnerCss.bannerText}>
                {props.bodyText}
            </div>
            <HCButton title={props.buttonText} isOutlined={!props.isMainBanner} icon={props.buttonIcon}/>
        </div>
        <img src={props.bannerImg} alt="banner-img" className={HCBunnerCss.bannerImg}/>
    </section>
}

export default HCBanner;