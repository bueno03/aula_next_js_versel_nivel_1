import Link from 'next/link';

function Home() {
    let environmentType = "Nao definido";

    if (process.env.ENVIRONMENT_TYPE !== "") {
        environmentType = process.env.ENVIRONMENT_TYPE;
    }

    return (
        <div>
            <h1>Ambiente:</h1> {environmentType}
            <h1>Home Homologação</h1>
            <Link href="/sobre">
                Pagina sobre
            </Link>
        </div>
    )
}

export default Home