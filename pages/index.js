import Layout from '../components/Layout';
import Link from 'next/link';
import { Component } from 'react';
import Image from 'next/image';

import groupBy from 'lodash/groupBy';

export default class Index extends Component {

componentDidMount = () => {
    document.getElementById("btnMenuAbout").classList.remove("active");
    document.getElementById("btnMenuHome").classList.add("active");
}

static async getInitialProps() {

    // API
    const topNewsLeftRest = await fetch(`http://localhost/gatsby-news/admin/api/news.php?slug=all&limit=4`);
    const topNewsRightRest = await fetch(`http://localhost/gatsby-news/admin/api/news.php?slug=all&limit=4&offset=4`);
    const listOfKategori = await fetch(`http://localhost/gatsby-news/admin/api/news.php?slug=all`);

    const featuredItems = await fetch(`http://localhost/gatsby-news/admin/api/news.php?slug=all`);
    const popularNewsItem = await fetch(`http://localhost/gatsby-news/admin/api/popular_news.php`);
    const latestNewsItem = await fetch(`http://localhost/gatsby-news/admin/api/latest_news.php`);
    const mostViewed = await fetch(`http://localhost/gatsby-news/admin/api/popular_news.php`);
    const mostRead = await fetch(`http://localhost/gatsby-news/admin/api/popular_news.php`);
    const mostRecent = await fetch(`http://localhost/gatsby-news/admin/api/latest_news.php`);

    const mainNews = await fetch(`http://localhost/gatsby-news/admin/api/news.php?slug=all&limit=9`);

    // to Json
    const topNewsLeftData = await topNewsLeftRest.json();
    const topNewsRightData = await topNewsRightRest.json();

    const listOfKategoriData = await listOfKategori.json();
    const groupNews = groupBy(listOfKategoriData.data, (n) => n.kategori);
    const listOfKategoriToArray = Object.entries(groupNews);

    const featuredItemDataTemp = await featuredItems.json();

    const featuredItemData = [];
    featuredItemDataTemp.data.map((item) => {
        if (item.featured == 1) {
            featuredItemData.push(item);
        }
    });

    const popularNewsItemData = await popularNewsItem.json();
    const latestNewsItemData = await latestNewsItem.json();
    const mostViewedData = await mostViewed.json();
    const mostReadData = await mostRead.json();
    const mostRecentData = await mostRecent.json();

    const mainNewsData  = await mainNews.json();

    return {
        tNewsLeft: topNewsLeftData,
        tNewsRight: topNewsRightData,
        listOfKategori: listOfKategoriToArray,
        mainNews: mainNewsData,
        featuredItems: featuredItemData,
        popularNewsItem: popularNewsItemData,
        latestNewsItem: latestNewsItemData,
        mostViewed: mostViewedData,
        mostRead: mostReadData,
        mostRecent: mostRecentData,
    };
}

// loadImage(image) {
//     const image = new Image();
//     image.src = `http://localhost/gatsby-news/admin/uploads/${image}`;
//     // eslint-disable-next-line eqeqeq
//     if (image.width == 0) {
//         return `http://localhost/gatsby-news/admin/uploads/placeholder.png`;
//     }
//     return `http://localhost/gatsby-news/admin/uploads/${image}`;
// }

TopNewsLeft(img, slug, linkText) {
    return (
        <div className="col-md-6">
            <div className="tn-img">
                <Image src={img} alt={img} width={1200} height={1000} />
                <div className="tn-title">
                    <Link href={`news/${slug}`}>
                        <a>{linkText}</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

TopNewsRight(img, slug, linkText) {
    return (
        <div className="col-md-6">
            <div className="tn-img">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image src={img} alt={img} width={1200} height={945} />
                <div className="tn-title">
                    <Link href={`news/${slug}`}>
                        <a>{linkText}</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

NewsMap(kategori, item) {
    const imagePath = `http://localhost/gatsby-news/admin/uploads/`;
    return (
        <div className="col-md-6">
            <h2>{kategori}</h2>
            <div className="row cn-slider">
                {item.map(
                    (news, index) =>
                        index < 3 && (
                            <div className="col-md-6">
                                <div className="cn-img">
                                    {/* eslint-disable-next-line no-undef */}
                                    <Image src={imagePath + news.image} alt={imagePath + news.image} width={1200} height={1000} />
                                    <div className="cn-title">
                                        <Link href={`news/${news.slug}`}>
                                            <a>{news.title}</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
}

Featured(item) {
    const imagePath = `http://localhost/gatsby-news/admin/uploads/`;
    return (
        <div className="tn-news">
            <div className="tn-img">
                <Image src={imagePath + item.image} width={1200} height={1000} />
            </div>
            <div className="tn-title">
                <Link href={`/news/${item.slug}`}>
                    <a>{item.title}</a>
                </Link>
            </div>
        </div>
    );
}

PopularNews(item) {
    const imagePath = `http://localhost/gatsby-news/admin/uploads/`;
    return (
        <div className="tn-news">
            <div className="tn-img">
                <Image src={imagePath + item.image} width={1200} height={1000} />
            </div>
            <div className="tn-title">
                <Link href={`/news/${item.slug}`}>
                    <a>{item.title}</a>
                </Link>
            </div>
        </div>
    );
}

LatestNews(item) {
    const imagePath = `http://localhost/gatsby-news/admin/uploads/`;
    return (
        <div className="tn-news">
            <div className="tn-img">
                <Image src={imagePath + item.image} width={1200} height={1000} />
            </div>
            <div className="tn-title">
                <Link href={`/news/${item.slug}`}>
                    <a>{item.title}</a>
                </Link>
            </div>
        </div>
    )
}

MostViewed(item) {
    const imagePath = `http://localhost/gatsby-news/admin/uploads/`;
    return (
        <div className="tn-news">
            <div className="tn-img">
                <Image src={imagePath + item.image} width={1200} height={1000} />
            </div>
            <div className="tn-title">
                <Link href={`/news/${item.slug}`}>
                    <a>{item.title}</a>
                </Link>
            </div>
        </div>
    )
}

MostRead(item) {
    const imagePath = `http://localhost/gatsby-news/admin/uploads/`;
    return (
        <div className="tn-news">
            <div className="tn-img">
                <Image src={imagePath + item.image} width={1200} height={1000} />
            </div>
            <div className="tn-title">
                <Link href={`/news/${item.slug}`}>
                    <a>{item.title}</a>
                </Link>
            </div>
        </div>
    )
}

MostRecent(item) {
    const imagePath = `http://localhost/gatsby-news/admin/uploads/`;
    return (
        <div className="tn-news">
            <div className="tn-img">
                <Image src={imagePath + item.image} width={1200} height={1000} />
            </div>
            <div className="tn-title">
                <Link href={`/news/${item.slug}`}>
                    <a>{item.title}</a>
                </Link>
            </div>
        </div>
    )
}

MainNews(item) {
    const imagePath = `http://localhost/gatsby-news/admin/uploads/`;
    return (
        <div className="col-md-4">
            <div className="mn-img">
                <Image src={imagePath + item.image} width={1200} height={1000} />
                <div className="mn-title">
                    <Link href={`/news/${item.slug}`}>
                        <a>{item.title}</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

render() {
    const { tNewsLeft, tNewsRight,
            listOfKategori, featuredItems,
            popularNewsItem, latestNewsItem,
            mostViewed, mostRead,
            mostRecent, mainNews } = this.props;
    const imagePath = `http://localhost/gatsby-news/admin/uploads/`;

    return (
            <Layout title="Nextjs News">
                <br/>
                {/* top news */}
                <div className="top-news">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 tn-left">
                                <div className="row tn-slider">
                                    {tNewsLeft.status && tNewsLeft.data.map((item) => this.TopNewsLeft(imagePath + item.image,item.slug,item.title))}
                                </div>
                            </div>
                            <div className="col-md-6 tn-right">
                                <div className="row">
                                    {tNewsRight.status && tNewsRight.data.map((item) => this.TopNewsRight(imagePath + item.image,item.slug,item.title))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* top news end */}

                {/* category news */}
                <div className="cat-news">
                    <div className="container">
                        <div className="row">
                            {listOfKategori.length > 0 && listOfKategori.map((item) => this.NewsMap(item[0], item[1]))}
                        </div>
                    </div>
                </div>
                {/*  category end  */}

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
                                        {featuredItems.length > 0 && featuredItems.map((item) => (
                                            this.Featured(item)
                                        ))}
                                    </div>
                                    <div id="popular" className="container tab-pane fade">
                                        {popularNewsItem.data.length > 0 && popularNewsItem.data.map((item) => (
                                            this.PopularNews(item)
                                        ))}
                                    </div>
                                    <div id="latest" className="container tab-pane fade">
                                        {latestNewsItem.data.length > 0 && latestNewsItem.data.map((item) => (
                                            this.LatestNews(item)
                                        ))}
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
                                        {mostViewed.data.length > 0 && mostViewed.data.map((item) => (
                                            this.MostViewed(item)
                                        ))}
                                    </div>
                                    <div id="m-read" className="container tab-pane fade">
                                        {mostRead.data.length > 0 && mostRead.data.map((item) => (
                                            this.MostRead(item)
                                        ))}
                                    </div>
                                    <div id="m-recent" className="container tab-pane fade">
                                        {mostRecent.data.length > 0 && mostRecent.data.map((item) => (
                                            this.MostRecent(item)
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-news">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="row">
                                    {mainNews.data.length > 0 && mainNews.data.map((item) => (
                                        this.MainNews(item)
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}