import React from 'react';
import logo from './logo.svg';
import './link_tree.css';

function Link_tree() {
  return (
    <img class="logo" src="logo.svg" alt="logo">
    <div class="links">

        <div class="links__item">
            <a class="links__item links__item--promo" href="https://news.microsoft.com/id-id/2020/04/03/microsoft-bermitra-dengan-cloudswyft-dan-myedusolve-menawarkan-kursus-dan-kerja-praktek-guna-meningkatkan-keahlian-dua-juta-peserta-program-kartu-pra-kerja/"
                target="_blank">Instagram</a>
			<a class="channels__item" href="https://www.instagram.com/myedusolve/" target="_blank">
				<img src="assets/images/icon/instagram.png" alt="instagram" width=40 height=40>
			</a>
        </div>
        <div class="links__item">
            <a class="links__item links__item--featured"
                href="https://maubelajarapa.com/workshop/media/digital-imaging/learn-how-to-create-book-cover-illustration-using-adobe-illustrator/"
                target="_blank">Github Profile</a>
			<a class="channels__item" >
				<img src="assets/images/icon/linkedin.png" alt="linkedin" width=40 height=40>
			</a>
        </div>
        
        <!-- <div class="links__item">
            <a class="links__item links__item--promo" href="https://www.instagram.com/p/B8qcapWpqsT/"
                target="_blank">Linkedin</a>
			<a class="channels__item">
				<img src="assets/images/icon/linkedin.png" alt="linkedin" width=40 height=40>
			</a>
        </div> -->
        
    </div>


    <h2>Follow Us On</h2>

    <div class="channels">
        
        
        <a class="channels__item" href="https://www.linkedin.com/company/myedusolve-indonesia/" target="_blank"><img
                src="assets/images/icon/linkedin.png" alt="linkedin" width=40 height=40></a>
				
        <a class="channels__item" href="https://www.instagram.com/myedusolve/" target="_blank"><img
                src="assets/images/icon/instagram.png" alt="instagram" width=40 height=40></a>
        <a class="channels__item" href="https://www.facebook.com/Myedusolve-414540579106990" target="_blank"><img
                src="assets/images/icon/facebook.png" alt="facebook" width=40 height=40></a>
        <a class="channels__item" href="https://twitter.com/myedusolve" target="_blank"><img
                    src="assets/images/icon/twitter.png" alt="twitter" width=40 height=40></a>
        <a class="channels__item" href="https://www.youtube.com/channel/UC8EZqWiSgCdmQsiFEEPER6Q" target="_blank"><img
                src="assets/images/icon/youtube.png" alt="youtube" width=40 height=40></a>
    </div>
    </div>
  );
}

export default Link_tree;
