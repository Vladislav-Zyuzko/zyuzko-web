import { appStrings } from "../strings";
import articleCover1 from '../assets/images/article_covers/article_cover1.png';
import articleCover2 from '../assets/images/article_covers/article_cover2.png';
import articleCover3 from '../assets/images/article_covers/article_cover3.png';

const articles: HCArticleProps[] = [
    {
        title: appStrings.articleTitle1,
        description: appStrings.articleText1,
        imageUrl: articleCover1,
    },
    {
        title: appStrings.articleTitle2,
        description: appStrings.articleText2,
        imageUrl: articleCover2,
    },
    {
        title: appStrings.articleTitle3,
        description: appStrings.articleText3,
        imageUrl: articleCover3,
    },
    {
        title: appStrings.articleTitle1,
        description: appStrings.articleText1,
        imageUrl: articleCover1,
    },
    {
        title: appStrings.articleTitle2,
        description: appStrings.articleText2,
        imageUrl: articleCover2,
    },
    {
        title: appStrings.articleTitle3,
        description: appStrings.articleText3,
        imageUrl: articleCover3,
    },
]

export default articles;
