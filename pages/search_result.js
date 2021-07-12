import Layout from '../components/Layout';
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

function SearchResult() {

    const [relatedNews, setRelatedNews] = useState([]);
    const router = useRouter();
    const { search } = router.query;


    useEffect(() => {

        const data = new URLSearchParams();
        data.append('title', search );

        fetch(
            `http://localhost/gatsby-news/admin/api/search.php`,
            {
                method: 'POST',
                body: data,
            }
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
        <Layout title="Search Result - Nextjs News by Ardiansyah Yusuf">
            <div className="breadcrumb-wrap">
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">Search Result</li>
                    </ul>
                </div>
            </div>

            <div className="single-news">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sn-related">
                                <h2>Hasil pencarian mengandung kata <u>{search}</u></h2>
                                <div className="row sn-slider">
                                    {relatedNews.length > 0 && relatedNews.map((item) => (
                                        <RelatedNewsItem news={item} />
                                    ))}
                                    {relatedNews.length == 0 && <p>&nbsp;&nbsp;&nbsp;&nbsp;Tidak menemukan berita yang sesuai pencarian...</p>}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SearchResult;