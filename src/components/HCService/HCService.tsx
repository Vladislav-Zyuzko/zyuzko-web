import HCServiceCss from './HCservice.module.css';

function HCService(props: HCServiceProps) {
    return <button className={HCServiceCss.serviceButton}>
        <div className={HCServiceCss.serviceImageContainer}>
            <img src={props.imageUrl} alt="service-image" className={HCServiceCss.serviceImage}/>
        </div>
        <div className={HCServiceCss.serviceTitle}>
            {props.title}
        </div>
        <div className={HCServiceCss.serviceDescription}>
            {props.description}
        </div>
    </button>
}

export default HCService;