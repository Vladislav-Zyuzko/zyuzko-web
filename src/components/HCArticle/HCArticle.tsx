import HCArticleCss from './HCarticle.module.css';

function HCArticle(props: HCArticleProps) {
    return <article className={HCArticleCss.articleContainer}>
        <img src={props.imageUrl} alt="article-image" />
        <section className={HCArticleCss.articleContent}>
            <div className={HCArticleCss.articleTitle}>
                {props.title}
            </div>
            <div className={HCArticleCss.articleDescription}>
                {props.description}
            </div>
            <div className={HCArticleCss.articleLink}>
                <a href="">Read more</a>
                <img src="src/assets/images/icons/arrow.svg" alt="article-arrow" className={HCArticleCss.articleLinkIcon}/>
            </div>
        </section>
    </article>
}

export default HCArticle;