import { appStrings } from '../../strings';
import HCBanner from '../../components/HCBanner/HCBanner';
import HCButton from '../../components/HCbutton/HCButton';
import HCService from '../../components/HCService/HCService';
import HCTitle from '../../components/HCTitle/HCTitle';
import HomeCss from './home.module.css';

function Home() {
    return(
      <>
        <div id={HomeCss.banner1}>
          <HCBanner title={appStrings.bannerTitle1} bodyText={appStrings.bannerText1} buttonText={appStrings.bannerButton1} bannerImg='src/assets/images/banners/first_banner.png' isMainBanner={true} isReversed={false}/>
        </div>
        <article>
          <div id={HomeCss.servicesTitle}>
            <HCTitle title={appStrings.servicesTitle} />
          </div>
          <div id={HomeCss.servicesDescription}>
            {appStrings.servicesDescription}
          </div>
          <div id={HomeCss.servicesContainer}>
            <HCService title={appStrings.serviceTitle1} description={appStrings.serviceDescription1} imageUrl='src/assets/images/services/search.png'/>
            <HCService title={appStrings.serviceTitle2} description={appStrings.serviceDescription2} imageUrl='src/assets/images/services/bottle.png'/>
            <HCService title={appStrings.serviceTitle3} description={appStrings.serviceDescription3} imageUrl='src/assets/images/services/consultation.png'/>
            <HCService title={appStrings.serviceTitle4} description={appStrings.serviceDescription4} imageUrl='src/assets/images/services/details_info.png'/>
            <HCService title={appStrings.serviceTitle5} description={appStrings.serviceDescription5} imageUrl='src/assets/images/services/pharmacy.png'/>
            <HCService title={appStrings.serviceTitle6} description={appStrings.serviceDescription6} imageUrl='src/assets/images/services/tracking.png'/>
          </div>
          <div id={HomeCss.servicesButtonContainer}>
            <HCButton title={appStrings.servicesButton} isOutlined={true} />
          </div>
        </article>
        <div id={HomeCss.banner2}>
          <HCBanner title={appStrings.bannerTitle2} bodyText={appStrings.bannerText2} buttonText={appStrings.bannerButton2} bannerImg='src/assets/images/banners/second_banner.png' isMainBanner={false} isReversed={true}/>
        </div>
        <div id={HomeCss.banner3}>
          <HCBanner title={appStrings.bannerTitle3} bodyText={appStrings.bannerText3} buttonText={appStrings.bannerButton3} bannerImg='src/assets/images/banners/third_banner.png' isMainBanner={false} isReversed={false} buttonIcon='src/assets/images/icons/arrow.svg'/>
        </div>
      </>
    );
  }
  
  export default Home;