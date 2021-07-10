import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {

    render() {
        return (
    <Html lang="en">
        <Head>
            <link href="/static/img/favicon.ico" rel="icon" />

            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap" rel="stylesheet" /> 

            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
            <link href="/static/lib/slick/slick.css" rel="stylesheet" />
            <link href="/static/lib/slick/slick-theme.css" rel="stylesheet" />

            <link href="/static/css/style.css" rel="stylesheet" />
        </Head>
        <body>
            <Main />
            <NextScript />

            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
            <script src="/static/lib/easing/easing.min.js"></script>
            <script src="/static/lib/slick/slick.min.js"></script>
            <script src="/static/js/main.js"></script>

        </body>
    </Html>
        )
    }
}