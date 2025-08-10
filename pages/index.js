import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home Homologação</h1>
            <Link href="/sobre">
                <a>Pagina sobre</a>
            </Link>
        </div>
    )
}

export default Home