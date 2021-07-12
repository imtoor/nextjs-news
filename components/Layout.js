import Link from 'next/link';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import {useState} from "react";

Router.onRouteChangeStart = url => {
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

function Layout({ children, title }) {

    const router = useRouter();

    const searchNews = (searchText) => {
        router.push('/redir?search=' + searchText);
    }

    const Header = () => (
        <header>
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tb-contact">
                                <p><i className="fas fa-envelope"></i>ardiansyahyusuf1096@gmail.com</p>
                                <p><i className="fas fa-phone-alt"></i>+62 82347043355</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="brand">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4">
                            <div className="b-logo">
                                <Link href="/">
                                    <a>
                                        <img src="/static/img/logo.png" alt="Logo" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <div className="b-ads">
                                <Link href="#">
                                    <a>
                                        <img src="/static/img/ads-1.jpg" alt="Ads" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="b-search">
                                <input type="text" id="search" name="search" placeholder="cari berita" onKeyUp={(e) => e.key === 'Enter' || e.keyCode === 13 ? searchNews(e.target.value):''}  />
                                <button onClick={e => searchNews(document.querySelector('#search').value)}><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-bar">
                <div className="container">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <Link href="#">
                            <a className="navbar-brand">MENU</a>
                        </Link>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <Link href="/">
                                    <a id="btnMenuHome" className="nav-item nav-link active">Home</a>
                                </Link>
                                <Link href="/about">
                                    <a id="btnMenuAbout" className="nav-item nav-link">About</a>
                                </Link>
                            </div>
                            <div className="social ml-auto">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </header>
    )

    const Footer = () => (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Get in Touch</h3>
                                <div className="contact-info">
                                    <p><i className="fas fa-envelope"></i>ardiansyahyusuf1096@gmail</p>
                                    <p><i className="fas fa-phone-alt"></i>+62 82347043355</p>
                                    <div className="social">
                                        <a href="" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a href="" target="_blank"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Useful Links</h3>
                                <ul>
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">Pellentesque</a></li>
                                    <li><a href="#">Aenean vulputate</a></li>
                                    <li><a href="#">Vestibulum sit amet</a></li>
                                    <li><a href="#">Nam dignissim</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Quick Links</h3>
                                <ul>
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">Pellentesque</a></li>
                                    <li><a href="#">Aenean vulputate</a></li>
                                    <li><a href="#">Vestibulum sit amet</a></li>
                                    <li><a href="#">Nam dignissim</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Newsletter</h3>
                                <div className="newsletter">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed porta dui. ClassName aptent taciti sociosqu
                                    </p>
                                    <form>
                                        <input className="form-control" type="email" placeholder="Your email here" />
                                        <button className="btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 copyright">
                            <p>Copyright &copy; <a href="https://htmlcodex.com" target="_blank">HTML Codex</a>. All Rights Reserved</p>
                        </div>

                        <div className="col-md-6 template-by">
                            <p>Template By <a href="https://htmlcodex.com" target="_blank">HTML Codex</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <Link href="#">
                <a className="back-to-top"><i className="fa fa-chevron-up"></i></a>
            </Link>
        </footer>
    )

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;