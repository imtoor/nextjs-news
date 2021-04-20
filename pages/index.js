import Layout from '../components/Layout';
import Link from 'next/link';
import {Component} from 'react';

export default class Index extends Component {

componentDidMount() {
    document.getElementById("btnMenuAbout").classList.remove("active");
    document.getElementById("btnMenuHome").classList.add("active");
}

CategoryNews() {
    return (
<>
<br />
<div className="cat-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Sports</h2>
                        <div className="row cn-slider">
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="/static/img/news-350x223-1.jpg" />
                                    <div className="cn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="/static/img/news-350x223-2.jpg" />
                                    <div className="cn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="/static/img/news-350x223-3.jpg" />
                                    <div className="cn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>Technology</h2>
                        <div className="row cn-slider">
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="/static/img/news-350x223-4.jpg" />
                                    <div className="cn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="/static/img/news-350x223-5.jpg" />
                                    <div className="cn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="/static/img/news-350x223-1.jpg" />
                                    <div className="cn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>
    );
}

TabNews() {
    return (
<>
<div className="tab-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="nav nav-pills nav-justified">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="pill" href="#featured">Featured News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#popular">Popular News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#latest">Latest News</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div id="featured" className="container tab-pane active">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-1.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-2.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-3.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                            <div id="popular" className="container tab-pane fade">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-4.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-5.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-1.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                            <div id="latest" className="container tab-pane fade">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-2.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-3.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-4.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <ul className="nav nav-pills nav-justified">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="pill" href="#m-viewed">Most Viewed</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#m-read">Most Read</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#m-recent">Most Recent</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div id="m-viewed" className="container tab-pane active">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-5.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-4.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-3.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                            <div id="m-read" className="container tab-pane fade">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-2.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-1.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-3.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                            <div id="m-recent" className="container tab-pane fade">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-4.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-5.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="/static/img/news-350x223-1.jpg" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>
    );
}

MainNews() {
    return (
    <div className="main-news">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="/static/img/news-350x223-1.jpg" />
                                    <div className="mn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="/static/img/news-350x223-2.jpg" />
                                    <div className="mn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="/static/img/news-350x223-3.jpg" />
                                    <div className="mn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="/static/img/news-350x223-4.jpg" />
                                    <div className="mn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="/static/img/news-350x223-5.jpg" />
                                    <div className="mn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="/static/img/news-350x223-1.jpg" />
                                    <div className="mn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="/static/img/news-350x223-2.jpg" />
                                    <div className="mn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="/static/img/news-350x223-3.jpg" />
                                    <div className="mn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="/static/img/news-350x223-4.jpg" />
                                    <div className="mn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="mn-list">
                            <h2>Read More</h2>
                            <ul>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Pellentesque tincidunt enim libero</a></li>
                                <li><a href="">Morbi id finibus diam vel pretium enim</a></li>
                                <li><a href="">Duis semper sapien in eros euismod sodales</a></li>
                                <li><a href="">Vestibulum cursus lorem nibh</a></li>
                                <li><a href="">Morbi ullamcorper vulputate metus non eleifend</a></li>
                                <li><a href="">Etiam vitae elit felis sit amet</a></li>
                                <li><a href="">Nullam congue massa vitae quam</a></li>
                                <li><a href="">Proin sed ante rutrum</a></li>
                                <li><a href="">Curabitur vel lectus</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

render() { 
    return(
<Layout title="Nextjs News by Ardiansyah Yusuf">
{this.CategoryNews()}
{this.TabNews()}
{this.MainNews()}
</Layout>
    ); 
    }
}