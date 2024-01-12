import { appStrings} from "../strings";
import avatarImage1 from '../assets/images/avatars/avatar1.png';
import avatarImage2 from '../assets/images/avatars/avatar2.png';
import avatarImage3 from '../assets/images/avatars/avatar3.png';
import avatarImage4 from '../assets/images/avatars/avatar4.png';

const sliderContents: HCSliderContentProps[] = [
    {
        avatarTitle: appStrings.sliderAvatarTitle1,
        avatarSubtitle: appStrings.sliderAvatarDescription1,
        avatarImage: avatarImage1,
        contentText: appStrings.sliderText1,
    },
    {
        avatarTitle: appStrings.sliderAvatarTitle2,
        avatarSubtitle: appStrings.sliderAvatarDescription2,
        avatarImage: avatarImage2,
        contentText: appStrings.sliderText2,
    },
    {
        avatarTitle: appStrings.sliderAvatarTitle3,
        avatarSubtitle: appStrings.sliderAvatarDescription3,
        avatarImage: avatarImage3,
        contentText: appStrings.sliderText3,
    },
    {
        avatarTitle: appStrings.sliderAvatarTitle4,
        avatarSubtitle: appStrings.sliderAvatarDescription4,
        avatarImage: avatarImage4,
        contentText: appStrings.sliderText4,
    },
]

export default sliderContents;
