import Container from "../../ui/Container";
import RentalSelection from "./RentalSelection";

const RentalSection = () => {
    return (
        <section className="relative -mt-36 sm:-mt-44 lg:-mt-[220px] z-30">
            <Container>
                <RentalSelection />
            </Container>
        </section>
    );
};

export default RentalSection;
