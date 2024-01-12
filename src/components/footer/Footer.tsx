import FooterCss from './foouter.module.css';
import linkColumns from '../../data/HCLinkColumnsData';
import HCLinkColumn from '../HCLinkColumn/HCLInkColumn';
import { appStrings } from '../../strings';

function Footer() {
    return <footer className={FooterCss.HCFooter}>
        <div className={FooterCss.footerTitle}>
            <div className={FooterCss.footerLogoContainer}>
                <div className={FooterCss.footerLogo}>{appStrings.appLogoText}</div>
                <h2 className={FooterCss.footerLogoTitle}>
                    {appStrings.appTitle}
                </h2>
            </div>
            <p className={FooterCss.footerTitleDescription}>
                {appStrings.footerText}
            </p>
            <p className={FooterCss.footerTitleBrand}>
                {appStrings.footerBrand}
            </p>
        </div>
        <div className={FooterCss.linkColumns}>
            {linkColumns.map((item) => HCLinkColumn(item))}
        </div>
    </footer>
}

export default Footer;
