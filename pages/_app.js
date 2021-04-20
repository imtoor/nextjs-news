import Head from 'next/head';

function App({Component, pageProps}) {
return (
    <>
    <Head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    </Head>
    <Component {...pageProps} />
    </>
);
}

export default App;