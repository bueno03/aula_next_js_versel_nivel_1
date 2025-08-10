import Link from 'next/link';

function Home() {
    let environmentType = "Nao definido";

    if (process.env.ENVIRONMENT_TYPE == "PROD") {
        environmentType = "PROD";
    }

    if (process.env.ENVIRONMENT_TYPE == "HOMOLOG") {
        environmentType = "HOMOLOG";
    }

    return (
        <div>
            <h3>Ambiente:  {environmentType}</h3>
            <h1>Home</h1>
            <Link href="/sobre">
                Pagina sobre
            </Link>
        </div>
    )
}

export default Home