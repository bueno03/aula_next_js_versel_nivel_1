// This "Link" is a "next" framework from React.
// It make the page as a "one single page".
// It means, once you load the page, you can navegate through the page links
// and the page will not be reload again.
import Link from 'next/link';

function Sobre() {
    return (
        <div>
            <h1>Pagina sobre</h1>
             <Link href="/">
                <a>Pagina Home</a>
            </Link>
        </div>
    )
}

export default Sobre