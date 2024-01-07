import HCServiceCss from './HCservice.module.css';

function HCService(props: HCArticleProps) {
    return <button className={HCServiceCss.serviceButton}>
        <div className={HCServiceCss.serviceImageContainer}>
            <img src={props.imageUrl} alt="service-image" className={HCServiceCss.serviceImage}/>
        </div>
        <h2 className={HCServiceCss.serviceTitle}>
            {props.title}
        </h2>
        <p className={HCServiceCss.serviceDescription}>
            {props.description}
        </p>
    </button>
}

export default HCService;
