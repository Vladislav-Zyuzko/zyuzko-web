import HCLinkColumnCss from './HClinkColumn.module.css';

function HCLinkColumn(props: HCLinkColumnProps) {
    return <section className={HCLinkColumnCss.linkColumnContainer}>
        <div className={HCLinkColumnCss.linkColumnTitle}>
            {props.title}
        </div>
        {props.links.map((item) => (
            <a href="" className={HCLinkColumnCss.columnLink}>{item}</a>
        ))}
    </section>
}

export default HCLinkColumn;