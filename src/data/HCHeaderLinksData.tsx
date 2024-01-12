import { appStrings } from "../strings";

const headerLinks: HCHeaderLinkProps[] = [
    {
        title: appStrings.rootLink,
        link: '/',
    },
    {
        title: appStrings.doctorLink,
        link: '/find-doctor',
    },
    {
        title: appStrings.appsLink,
        link: '/apps',
    },
    {
        title: appStrings.testimonialsLink,
        link: '/testimonials',
    },
    {
        title: appStrings.aboutLink,
        link: '/about',
    },
]

export default headerLinks;
