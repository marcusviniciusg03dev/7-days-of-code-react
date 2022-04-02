import { useRef } from 'react';
import { StrongElsie } from '../../Global/Styles';
import { FormSignUpNewsletter } from './styles';

export default function AssinaturaNewsletter() {
    const emailField = useRef<null | HTMLInputElement>(null);

    function handleSignUpNewsletter (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const email = emailField.current!.value;
        
        emailField.current!.value = "";

        // register e-mail...
        
        alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}.`);
    }

    return (
        <FormSignUpNewsletter onSubmit={handleSignUpNewsletter}>
            <small>A sua casa com as</small>
            <StrongElsie>melhores plantas</StrongElsie>
            <small
                children={`
                    Encontre aqui uma vasta seleção de plantas 
                    para decorar a sua casa e torná-lo uma pessoa 
                    mais feliz no seu dia a dia. Entre com seu 
                    e-mail e assine nossa newsletter para saber 
                    das novidades da marca.
                `}
            />
            <div>
                <input
                    ref={emailField}
                    required
                    placeholder="Insira seu e-mail"
                    type="email"
                />

                <button type="submit" children="Assinar newsletter" />
            </div>
        </FormSignUpNewsletter>
    )
}