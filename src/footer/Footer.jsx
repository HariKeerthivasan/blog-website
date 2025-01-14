import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb_footer_section_padding'>
            <div className='sb_footer_links'>
                <div className='sb_footer_links_div'>
                    <h1>For Business</h1>
                    <a href="/">
                    <p>About Us</p>
                    </a>
                    <a href="/">
                    <p>Contact Us</p>
                    </a>
                    <a href="/individual">
                    <p>Policy</p>
                    </a>
                </div>
                <div className='sb_footer_links_div'>
                    <h1>Resources</h1>
                    <a href="/">
                    <p>Website Building Tips</p>
                    </a>
                    <a href="/">
                    <p>Blog Search</p>
                    </a>
                    <a href="/">
                    <p>Developer Resources</p>
                    </a>
                    <a href="/">
                    <p>Help Center</p>
                    </a>
                </div>
                <div className='sb_footer_links_div'>
                    <h1>Patners</h1>
                    <a href="/">
                    <p>Blogger</p>
                    </a>
                </div>
                <div className='sb_footer_links_div'>
                    <h1>Products</h1>
                    <a href="/">
                    <p>Create a Blog</p>
                    </a>
                    <a href="/">
                    <p>Website Builder</p>
                    </a>
                    <a href="/">
                    <p>Website Design  service</p>
                    </a>
                    <a href="/">
                    <p>Website Man</p>
                    </a>
                </div>
                <div className='sb_footer_links_div'>
                </div>
                </div>
                </div>
                    <div className='SocialMedia'>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-pinterest"></i>
                        <i class="fa-brands fa-instagram"></i>    
                        <i class="fa-brands fa-x-twitter"></i>
                    </div>
        <hr></hr>
        <div className='sb_footer_below'>
            <div className='sb_footer_copyrights'>
            <p>
                @{new Date().getFullYear()}CodeInn.All right reserved.    
            </p>
            </div>
        </div>
        <div className='sb_footer_below_links'>
            <a href="./terms"><div><p>Terms & conditions</p></div></a>
            <a href="./Privacy"><div><p>Privacy</p></div></a>
            <a href="./Security"><div><p>Security</p></div></a>
            <a href="./cookie"><div><p>Terms & conditions</p></div></a>
        </div>
    </div>
  )
}

export default Footer