import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-neutral ">
                <div className='container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 footer p-10 text-neutral-content '>

                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>

                    <div>
                        <span className="footer-title">Social</span>
                        <a className="link link-hover">Twitter</a>
                        <a className="link link-hover">Instagram</a>
                        <a className="link link-hover">Facebook</a>
                        <a className="link link-hover">Github</a>
                    </div>

                   
                </div>

            </footer>
        </div>
    );
};

export default Footer;