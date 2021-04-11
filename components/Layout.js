import Link from 'next/link';
import Head from 'next/head';

export default ({ children, title }) => (

    <div>
        <header>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/hireme"><a>Hire me</a></Link>
        </header>
        <h1>{title}</h1>
        {children}
        <footer>Footer</footer>
    </div>

)