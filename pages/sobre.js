// This "Link" is a "next" framework from React.
// It make the page as a "one single page".
// It means, once you load the page, you can navegate through the page links
// and the page will not be reload again.
import Link from 'next/link';
import { getEnvStaticProps } from '../utils';

function Sobre({ envTypeString }) {
    return (
        <div>
            <h3>Ambiente: {envTypeString}</h3>
            <h1>Pagina sobre</h1>
             <Link href="/">
                Pagina Home
            </Link>
        </div>
    )
}
export { getEnvStaticProps as getStaticProps };
export default Sobre;