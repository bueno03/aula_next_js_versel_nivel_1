import Link from 'next/link';
import getEnvStaticProps from '../utils';

function Home({ envTypeString }) {

    return (
        <div>
            <header className="header">
                <h3>Ambiente: {envTypeString}</h3>
            </header>
            <h1>Home</h1>
            <Link href="/sobre">
                Pagina sobre
            </Link>
        </div>
    )
}

export { getEnvStaticProps as getStaticProps };
export default Home;