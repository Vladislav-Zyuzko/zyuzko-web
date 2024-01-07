import HCLinkColumnCss from './HClinkColumn.module.css';

function HCLinkColumn(props: HCLinkColumnProps) {
    return <section className={HCLinkColumnCss.linkColumnContainer}>
        <h4 className={HCLinkColumnCss.linkColumnTitle}>
            {props.title}
        </h4>
        {props.links.map((item) => (
            <a href="" className={HCLinkColumnCss.columnLink}>{item}</a>
        ))}
    </section>
}

export default HCLinkColumn;
