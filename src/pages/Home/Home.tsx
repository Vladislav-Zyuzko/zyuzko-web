import { useState } from 'react';
import { appStrings } from '../../strings';
import { appColors } from '../../colors';
import HCBanner from '../../components/HCBanner/HCBanner';
import HCButton from '../../components/HCbutton/HCButton';
import HCService from '../../components/HCService/HCService';
import HCTitle from '../../components/HCTitle/HCTitle';
import HCArticle from '../../components/HCArticle/HCArticle';
import HCSlider from '../../components/HCSlider/HCSlider';
import Footer from '../../components/footer/Footer';
import HomeCss from './home.module.css';
import banners from '../../data/HCBannersData';
import titles from '../../data/HCTitleData';
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
          {HCBanner(banners[0])}
        </div>
        <article>
          <div id={HomeCss.servicesTitle}>
            {HCTitle(titles[0])}
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
          {HCBanner(banners[1])}
        </div>
        <div id={HomeCss.banner3}>
          {HCBanner(banners[2])}
        </div>
        <div>
          <HCSlider title={appStrings.sliderTitle} color={appColors.primaryWhite} />
        </div>
        <div id={HomeCss.articlesTitle}>
          {HCTitle(titles[1])}
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