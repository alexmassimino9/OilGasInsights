import { ReactElement } from "react";


type SectionProps  = {
    title?:string, 
    children: ReactElement
}

const Section = ({title, children}: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}


export default Section;