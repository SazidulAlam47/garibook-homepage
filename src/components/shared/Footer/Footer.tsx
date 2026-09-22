import Container from "../../ui/Container";
import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterUpper from "./FooterUpper";

const Footer = () => {
    return (
        <footer className="footer-wrapper bg-black text-white w-full overflow-hidden">
            <Container>
                <FooterUpper />
                <FooterMiddle />
                <FooterBottom />
            </Container>
        </footer>
    );
};

export default Footer;
