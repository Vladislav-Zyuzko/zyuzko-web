import { appStrings } from '../../strings';
import HCBanner from '../../components/HCBanner/HCBanner';
import HCTitle from '../../components/HCTitle/HCTitle';
import HomeCss from './home.module.css';

function Home() {
    return(
      <>
        <div id={HomeCss.banner1}>
          <HCBanner title={appStrings.bannerTitle1} bodyText={appStrings.bannerText1} buttonText={appStrings.bannerButton1} bannerImg='src/assets/images/banners/first_banner.png' isMainBanner={true} isReversed={false}/>
        </div>
        <HCTitle title={"Our services"}/>
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