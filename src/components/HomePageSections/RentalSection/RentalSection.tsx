import Container from "../../ui/Container";
import RentalSelection from "./RentalSelection";

const RentalSection = () => {
    return (
        <section className="relative -mt-16 sm:-mt-20 md:-mt-24 z-30 mb-6 sm:mb-10">
            <Container>
                <RentalSelection />
            </Container>
        </section>
    );
};

export default RentalSection;
