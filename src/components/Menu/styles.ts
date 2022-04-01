import styled from "styled-components";

import Logo from '../../assets/logo.svg'

export const AppMenu = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: .5rem 0;

    @media screen and (max-width: 900px) {
        & {
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const AppLogo = styled.img.attrs({ src: Logo, alt: 'Logo' })``;

export const NavigationList = styled.ul`
    display: flex;
`;

export const NavigationListItem = styled.li`
    span {
        margin: 0 1rem;

        @media screen and (max-width: 600px) {
            margin: 0 .2rem;
        }
    }

    font-size: .9rem;
`;