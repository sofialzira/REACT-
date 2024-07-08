import styles from './Section.module.css'

interface SectionPropType {
    children: React.ReactNode,
    fullwidth?: boolean
}

// Componente 
function Section(props: SectionPropType) {

    const { children, fullwidth = false } = props;


    const sectionCss = styles.section;

    return (
        <section className={`${sectionCss}`}>
            {children}
        </section>
    )
}

export default Section