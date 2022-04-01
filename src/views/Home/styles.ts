import styled from "styled-components";
import HeroImage from '../../assets/img/hero.svg';

const HomePage = styled.main`
    background-image: url(${HeroImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: right;
    min-height: 100vh;
    padding: .5rem 15%;

    @media screen and (max-width: 1100px) {
        padding: .5rem 5%;
    }
`;

export default HomePage;