import styled from "styled-components";
import MailIcon from '../../assets/icons/mail.svg';

export const FormSignUpNewsletter = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30vw;
    height: 50vh;
    margin-top: 10%;

    div {
        display: grid;
        grid-template-columns: 4fr 2fr;
        width: 110%;

        button {
            padding: .8rem;
            border: 0;
            color: #FFF;
            background: #FFCB47;
            box-shadow: 10px 10px 30px 0px #FFCB474D;
        }

        input {
            background-image: url(${MailIcon});
            background-repeat: no-repeat;
            background-position-x: 1rem;
            background-position-y: center;
            padding: 1rem 4rem;
        }
    }
`;