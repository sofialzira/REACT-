
import styles from './SectionTitle.module.css'

type SectionTitleType = {
    title: string;
    subtitle: string;
    tagline?:string;
}

function SectionTitle(props: SectionTitleType) {
    //Destructuring das classes do module.css
    const { wrapper } = styles

    const { title, subtitle, tagline } = props;


    return (
        <div className={wrapper}>
            <h4>{tagline}</h4>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
}

export default SectionTitle