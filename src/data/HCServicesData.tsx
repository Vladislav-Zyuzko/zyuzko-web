import { appStrings } from "../strings";
import searchImg from '../assets/images/services/search.png';
import bottleImg from '../assets/images/services/bottle.png';
import consultationImg from '../assets/images/services/consultation.png';
import detailsInfoImg from '../assets/images/services/details_info.png';
import pharmacyImg from '../assets/images/services/pharmacy.png';
import trackingImg from '../assets/images/services/tracking.png';

const services: HCArticleProps[] = [
    {
        title: appStrings.serviceTitle1,
        description: appStrings.serviceDescription1,
        imageUrl: searchImg,
    },
    {
        title: appStrings.serviceTitle2,
        description: appStrings.serviceDescription2,
        imageUrl: bottleImg,
    },
    {
        title: appStrings.serviceTitle3,
        description: appStrings.serviceDescription3,
        imageUrl: consultationImg,
    },
    {
        title: appStrings.serviceTitle4,
        description: appStrings.serviceDescription4,
        imageUrl: detailsInfoImg,
    },
    {
        title: appStrings.serviceTitle5,
        description: appStrings.serviceDescription5,
        imageUrl: pharmacyImg,
    },
    {
        title: appStrings.serviceTitle6,
        description: appStrings.serviceDescription6,
        imageUrl: trackingImg,
    },
]

export default services;
