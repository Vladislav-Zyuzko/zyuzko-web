import { appColors } from '../../colors';
import HCButton from '../HCbutton/HCButton';
import HCDivider from '../HCDivider/HCDivider';
import HCBannerCss from './HCbanner.module.css';

function HCBanner(props: HCBannerProps) {
    return <section className={HCBannerCss.banner} style={props.isReversed ? { flexDirection: 'row-reverse' } : {}}>
        <div>
            <div className={props.isMainBanner ? HCBannerCss.mainBannerTitle : HCBannerCss.bannerTitle}>
                {props.title}
            </div>
            {props.isMainBanner === false && <HCDivider color={appColors.primaryBlack}/>}
            <div className={props.isMainBanner ? HCBannerCss.mainBannerText : HCBannerCss.bannerText}>
                {props.bodyText}
            </div>
            <HCButton title={props.buttonText} isOutlined={!props.isMainBanner} icon={props.buttonIcon}/>
        </div>
        <img src={props.bannerImg} alt="banner-img" />
    </section>
}

export default HCBanner;