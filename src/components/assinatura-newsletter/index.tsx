import { StrongElsie } from '../../Global/Styles';
import { FormSignUpNewsletter } from './styles';

export default function AssinaturaNewsletter() {
    function handleSignUpNewsletter (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // register e-mail...
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
                <input type="email" required placeholder="Insira seu e-mail" />
                <button type="submit" children="Assinar newsletter" />
            </div>
        </FormSignUpNewsletter>
    )
}