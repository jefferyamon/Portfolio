import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/">visit my blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a href={img.url} key={img.url} className="icon" target="_blank">
              <img src={img.imgPath} alt="Socials" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Jeffery | Amon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
