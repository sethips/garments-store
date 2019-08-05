import React, { Component } from "react";

const Footer = props => {
  return (
    <footer>
      <p className="footer-links">
        <a
          href="https://github.com/abhinavsagar/Garments4Her"
          target="_blank"
        >
          View Source Code on Github
        </a>
        <span> / </span>
        <a href="mailto:abhinav.sagar2016@vitstudent.ac.in" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="https://github.com/abhinavsagar" target="_blank">
          See My Other Projects
        </a>
        <span> / </span>
        <a href="https://medium.com/@abhinav.sagar" target="_blank">
          Read My Blogs
        </a>
      </p>
      <p>
        &copy; 2019 <strong>Garments4Her</strong> - Women's Garments Online Store
      </p>
    </footer>
  );
};

export default Footer;
