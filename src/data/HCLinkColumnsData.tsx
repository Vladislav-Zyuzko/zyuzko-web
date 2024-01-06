import { appStrings } from "../strings";

const linkColumns: HCLinkColumnProps[] = [
    {
        title: 'Company',
        links: [appStrings.aboutLink, appStrings.testimonialsLink, appStrings.doctorLink, appStrings.appsLink],
    },
    {
        title: 'Region',
        links: ['Indonesia', 'Singapore', 'Hongkong', 'Canada'],
    },
    {
        title: 'Help',
        links: ['Help center', 'Contact support', 'Instructions', 'How it works']
    },
]

export default linkColumns;
