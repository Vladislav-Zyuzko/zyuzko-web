import { useState } from 'react';
import { appStrings } from '../../strings';
import HCBanner from '../../components/HCBanner/HCBanner';
import HCButton from '../../components/HCbutton/HCButton';
import HCService from '../../components/HCService/HCService';
import HCTitle from '../../components/HCTitle/HCTitle';
import HCArticle from '../../components/HCArticle/HCArticle';
import Footer from '../../components/footer/Footer';
import HomeCss from './home.module.css';
import services from '../../data/HCServicesData';
import articles from '../../data/HCArticlesData';

function Home() {

    const [showAll, setShowAll] = useState(false);
  
    const handleClick = () => {
      setShowAll(!showAll);
    };

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
          <section id={HomeCss.servicesContainer}>
            {services.map((item) => HCService(item))}
          </section>
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
        <div id={HomeCss.articlesTitle}>
          <HCTitle title={appStrings.articlesTitle} />
        </div>
        <section id={HomeCss.articlesContainer}>
          {articles.map((item, index) => {
            if (index < 3 || index >= 3 && showAll) {
              return HCArticle(item)
            }
          })}
        </section>
        <div id={HomeCss.articlesButtonContainer}>
            <HCButton title={showAll ? appStrings.hideArticlesButton : appStrings.activeArticlesButton} isOutlined={true} onClick={handleClick}/>
        </div>
        <Footer />
      </>
    );
  }
  
  export default Home;