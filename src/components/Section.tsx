type SectionProps = {
    children: React.ReactNode;
    title?: string;
    [key: string]: any;
};

export default function Section({ children, title, ...rest }: SectionProps) {
    return <section {...rest}> 
        <h2>{title}</h2>
        {children}
    </section>
}