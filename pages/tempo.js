function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinamico)</div>
            <div>{props.staticDateString} (statico com revalidacao apos 10 segundos)</div>
        </div>
    )
}

export async function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }, 
        revalidate: 10 // ten seconds to revalidate the page content in the server.
    }
}

export default Tempo;