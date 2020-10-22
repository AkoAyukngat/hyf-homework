import React from "react";

function Footer() {
  return (
    <div className="main_footer">
      <div className="footer_container">
        <div className="footer_rows">
         
          <div className="column">
            <h3>My React App</h3>
            <ul className="org_details">
            <li>2839 8292 9238</li>
              <li>Naestved Danmark</li>
              <li>Blomstergarden 100</li>
            </ul>
          </div>
         
          <div className="column">
            <h3>Links</h3>
            <ul className="org_details">
              <li>List Rendering</li>
              <li>Todo-List</li>
              <li>GitHub User Search</li>
              <li>GitHub Organisation Search</li>
            </ul>
          </div>
          
          <div className="column">
            <h3>Contacks</h3>
            <ul className="org_details">
              <li>Ako Ayukngat</li>
              <li>24598732</li>
              <li>Email: akoayukngat@gmail.com</li>
              
            </ul>
          </div>
          </div>

          <hr />
          
          <div className="row">
            <p className="date">
              &copy;{new Date().getFullYear()} COMPANY ORG | All rights Reserved
              | Terms of Service | Privacy
            </p>
          </div>
       
      </div>
     
    </div>
  );
}

export default Footer;
