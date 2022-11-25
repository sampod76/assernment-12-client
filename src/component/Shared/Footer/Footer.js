import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-neutral ">
                <div className='container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 footer p-10 text-neutral-content '>

                    <div>
                        <span className="footer-title">Services</span>
                        <Link className="link link-hover">Branding</Link>
                        <Link className="link link-hover">Design</Link>
                        <Link className="link link-hover">Marketing</Link>
                        <Link className="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Contact</Link>
                        <Link className="link link-hover">Jobs</Link>
                        <Link className="link link-hover">Press kit</Link>
                    </div>

                    <div>
                        <span className="footer-title">Social</span>
                        <Link className="link link-hover">Twitter</Link>
                        <Link className="link link-hover">Instagram</Link>
                        <Link className="link link-hover">Facebook</Link>
                        <Link className="link link-hover">Github</Link>
                    </div>

                   
                </div>

            </footer>
        </div>
    );
};

export default Footer;