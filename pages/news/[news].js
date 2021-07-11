import Layout from '../../components/Layout';
import Link from 'next/link';
import { Component, useEffect, useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/router";

const RelatedNewsItem = (news) => {
  const imagePath = `http://localhost/gatsby-news/admin/uploads/`;
    return (
    <div className="col-md-4">
        <div className="sn-img">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src={imagePath + news.news.image} alt={news.news.image} width={1200} height={1000} />
            <div className="sn-title">
                <Link href={`/news/${news.news.slug}`}>
                    <a>{news.news.title}</a>
                </Link>
            </div>
        </div>
    </div>
);
}

export default function News() {
    const [news, setNews] = useState([]);
    const [relatedNews, setRelatedNews] = useState([]);

    const router = useRouter();
    const slug = router.query.news;
    const imagePath = `http://localhost/gatsby-news/admin/uploads/`;

    useEffect(() => {
            fetch(
                `http://localhost/gatsby-news/admin/api/news.php?slug=${slug}`
            ).then(async (res) => {
                const response = await res.json();
                if (response !== undefined) {
                    if (response.status && response.data.length > 0) {
                        response.data.map((item) => {
                            setNews((prevState) => [...prevState, item]);
                        })
                    } else {
                        console.log('Data not found!');
                        router.push('/');
                    }
                } else {
                    console.log('Data undefined!');
                    router.push('/');
                }
            });
    }, []);

    useEffect(() => {
        fetch(
            `http://localhost/gatsby-news/admin/api/related_news.php?kategori=6&limit=6`
        ).then(async (res) => {
            const response = await res.json();
            if (response !== undefined) {
                if (response.status && response.data.length > 0) {
                    response.data.map((item) => {
                        setRelatedNews((prevState) => [...prevState, item]);
                    })
                }
            } else {
                setRelatedNews((prevState) => [...prevState, []]);
            }
        });
    }, []);

    return (
        <Layout>
            <div className="breadcrumb-wrap">
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">News details</li>
                    </ul>
                </div>
            </div>

            <div className="single-news">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="sn-container">
                                <div className="sn-img">
                                    {news.length > 0 &&  news.map((item) => (
                                        <Image width={1200} height={1000} src={imagePath + item.image} alt={item.image} />
                                    ))}
                                </div>
                                <div className="sn-content">
                                    <h1 className="sn-title">
                                        {news.length > 0 &&  news.map((item) => item.title)}
                                    </h1>
                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <p>{news.length > 0 &&  news.map((item) => item.content)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sn-related">
                                <h2>Related News</h2>
                                <div className="row sn-slider">
                                    {relatedNews.length > 0 && relatedNews.map((item) => (
                                        <RelatedNewsItem news={item} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="sidebar" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        );
};