import React from "react";

const Footer = () => {
  const style = { fontSize: "15px", fontWeight: "bold", color: "white" };
  return (
    <footer>
      <div className="footer-container">
        <p style={style}>Projet réalisé par 0xZales - 2022</p>
        <p style={style}>
          Credit icones{" "}
          <a
            href="https://iconFinder.com"
            target={"_blank"}
            style={{ color: "white" }}
          >
            iconFinder.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
