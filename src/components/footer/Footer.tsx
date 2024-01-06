import FooterCss from './foouter.module.css';
import linkColumns from '../../data/HCLinkColumnsData';
import HCLinkColumn from '../HCLinkColumn/HCLInkColumn';
import { appStrings } from '../../strings';

function Footer() {
    return <footer className={FooterCss.HCFooter}>
        <div className={FooterCss.footerTitle}>
            <div className={FooterCss.footerLogoContainer}>
                <div className={FooterCss.footerLogo}>{appStrings.appLogoText}</div>
                <div className={FooterCss.footerLogoTitle}>
                    {appStrings.appTitle}
                </div>
            </div>
            <div className={FooterCss.footerTitleDescription}>
                {appStrings.footerText}
            </div>
            <div className={FooterCss.footerTitleBrand}>
                {appStrings.footerBrand}
            </div>
        </div>
        <div className={FooterCss.linkColumns}>
            {linkColumns.map((item) => HCLinkColumn(item))}
        </div>
    </footer>
}

export default Footer;