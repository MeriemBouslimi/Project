import React from 'react';

function Footer(){
    return(
        <div className="footer">
<img src="/images/logo.png" className="footerimg" alt='logo'></img>
<div className="footerbottom">
    <span className="suiveztxt">© 2019 ArchiLog. </span>
    <div className="social">
        <span className="suiveztxt">Suivez ArchiLog</span>
        <img className="logosocial" src="/images/facebook.png" alt="facebook"></img>
        <img className="logosocial" src="/images/linkedin.png" alt="linkedin"></img>
        <img className="logosocial" src="/images/twitter.png" alt="twitter"></img>
        <img className="logosocial" src="/images/printerest.png" alt="printerest"></img>
    </div>
</div>
        </div>
    )
}

export default Footer;