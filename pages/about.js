import Layout from '../components/Layout';
import Link from 'next/link';
import { render } from 'react-dom';
import { Component } from 'react';

export default class About extends Component {

    componentDidMount() {
        document.getElementById("btnMenuHome").classList.remove("active");
        document.getElementById("btnMenuAbout").classList.add("active");
    }

    render() {

    return (
<Layout title="About Us - Nextjs News by Ardiansyah Yusuf">
<div className="contact">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <div className="contact-form">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div><button className="btn" type="submit">Kirim pesan</button></div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-info">
                            <h3>Kontak Saya</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus tempor hendrerit finibus.
                            </p>
                            <h4><i className="fa fa-envelope"></i>ardiansyahyusuf1096@gmail.com</h4>
                            <h4><i className="fa fa-phone"></i>+62 82347043355</h4>
                            <div className="social">
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</Layout>
);
}

}