import { socialMediaLinks } from "../data";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <>
      <footer className="footer__container">
        <ul className="social--icons">
          {socialMediaLinks.map((link) => {
            return (
              <SocialLinks key={link.id} {...link} itemclass="social--icon" />
            );
          })}
        </ul>
      </footer>
    </>
  );
};
export default Footer;
