import styled from "styled-components";

import HeroImage from '../../assets/img/hero.svg';
import howToGetPlant from '../../assets/img/how-to-get-plant.png';
import yellowBullet from '../../assets/icons/yellow-bullet.svg';

const HomePage = styled.main`
    min-height: 100vh;
    padding: .5rem 15%;

    @media screen and (max-width: 1100px) {
        padding: .5rem 5%;
    }
`;

export const Hero = styled.div`
    background-image: url(${HeroImage});
    background-repeat: no-repeat;
    background-size: 120%;
    background-position-x: -130px;
    height: 100vh;
    width: 100vh;
    top: 0;
    right: 0;

    position: absolute;
    z-index: -1;
`;

export const PlantsWrapper = styled.div`
    padding-bottom: 5rem;
`;

export const HowToGet = styled.div`
    display: grid;
    background: #fff;
    grid-template-columns: 1.5fr 1fr;
    box-shadow: 1px 3px 19px rgb(0 0 0 / 10%);
    height: 24rem;
    width: 60rem;
    margin: auto;

    aside {
        display: flex;
        flex-direction: column;
        padding: 2rem;

        ol {
            list-style-type: none;
            display: list-item;
            height: 100%;
        }
        
        ol li {
            display: flex;
            margin: 2em 0;
            font-size: 1rem;
        }
        
        ol li::before {
            content: url(${yellowBullet});
            margin-right: 5px;
        }
    }
`;

export const HowToGetPlantImage = styled.div`
    background-image: url(${howToGetPlant});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Offer = styled.li`
    background-color: #fff;
    box-shadow: 1px 3px 19px rgb(0 0 0 / 10%);
    display: flex;
    align-items: end;
    font-size: 1.2rem;
    display: grid;
    grid-template-columns: auto 50%;

    span {
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: .5rem;
    }
`;

export const SellingPlants = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: 100%;
    }
`;

export const PlantImage = styled.img`
    width: 12rem;
`;

export const MeetOurOffers = styled.div`
    margin: 4rem auto;
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
`;

export const BuyLink = styled.a`
    color: #FFCB47;
`;

export default HomePage;