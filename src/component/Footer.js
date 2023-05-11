import React from 'react'
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
export default function Footer() {
  return (
    <div>
        
        <footer className="bg-dark text-white">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-4">
            <h4>Innovatory Scrapyard</h4>
            <p>RAJA MANDI AGRA<br />UP, INDIA</p>
            <p>Phone: 1234567890<br />Email: inoscap@companyname.com</p>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li><Link to="#"><FaFacebook size={24} /></Link></li>
              <li><Link to="#"><FaInstagram size={24} /></Link></li>
              <li><Link to="#"><FaTwitter size={24} /></Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Legal</h4>
            <ul className="list-unstyled">
              <li><Link to="#">Terms of Service</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-center py-2">
        <p>&copy; {new Date().getFullYear()} INNOVATORY SCRAPYARD. All Rights Reserved.</p>
      </div>
    </footer>
</div>
    
  )
}
