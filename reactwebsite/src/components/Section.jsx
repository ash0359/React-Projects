export default function Section({title,children, ...props}) //...props is used to bring in id of section component used in examples
{
    return( 
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
    );
}