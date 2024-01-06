import { appStrings } from "../strings";
import firstBannerImage from '../assets/images/banners/first_banner.png';
import secondBannerImage from '../assets/images/banners/second_banner.png';
import thirdBannerImage from '../assets/images/banners/third_banner.png';

const banners: HCBannerProps[] = [
    {
        title: appStrings.bannerTitle1,
        bodyText: appStrings.bannerText1,
        buttonText: appStrings.bannerButton1,
        bannerImg: firstBannerImage,
        isMainBanner: true,
        isReversed: false,
    },
    {
        title: appStrings.bannerTitle2,
        bodyText: appStrings.bannerText2,
        buttonText: appStrings.bannerButton2,
        bannerImg: secondBannerImage,
        isMainBanner: false,
        isReversed: true,
    },
    {
        title: appStrings.bannerTitle3,
        bodyText: appStrings.bannerText3,
        buttonText: appStrings.bannerButton3,
        bannerImg: thirdBannerImage,
        isMainBanner: false,
        isReversed: false,
    },
]

export default banners;