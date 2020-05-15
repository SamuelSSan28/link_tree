import React from 'react';
import perfil from './assets/icons/foto_perfil.png';
import logo_instagram from "./assets/icons/instagram.png";
import logo_linkedin from "./assets/icons/linkedin.png";
import logo_github from "./assets/icons/github.png";
import logo_py from "./assets/icons/python.png";
import logo_java from "./assets/icons/java.png";
import logo_csharp from "./assets/icons/csharp1.png";
import logo_node from "./assets/icons/nodeJs.png";
import logo_mail from "./assets/icons/gmail2.png";

import './link_tree.css';

function Link_tree() {
  return (
  <div className="container">
    <img className="logo" src={perfil} alt="logo"/>
	<div className="logos">
		<h3>Samuel Santos Araújo</h3>
		<h3 className="linguagens"> 
		Linnguagens de Programação:  </h3>
		<a>
		<img src={logo_py} alt="instagram" width={35} height={35}/>
		<img src={logo_java} alt="instagram" width={35} height={45}/>
		<img src={logo_csharp} alt="instagram" width={35} height={35}/>
		<img src={logo_node} alt="instagram" width={35} height={35}/>
		</a>
	</div>
    <div className="links">
        <div className="links__item">
            <a className="links__item links__item--featured" href="https://www.instagram.com/samuelssan28/"
                target="_blank">  
					<img src={logo_instagram} alt="instagram" width={40} height={40}/>
					
			</a>
			
        </div>
		
       <div className="links__item">
            <a className="links__item links__item--featured" href="https://github.com/SamuelSSan28"
                target="_blank">  
					<img src={logo_github} alt="github" width={40} height={42}/>
					
			</a>
			
        </div>
		
		<div className="links__item">
            <a className="links__item links__item--featured" href="/"
                target="_blank">  
					<img src={logo_linkedin} alt="Linkedin" width={40} height={40}/>
					
			</a>
			
        </div>
		
        
    </div>


    
  </div>
  );
}

export default Link_tree;
