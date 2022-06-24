import { useRef, useState } from 'react';
import { StrongElsie } from '../../Global/Styles';
import { FormSignUpNewsletter } from './styles';

export default function AssinaturaNewsletter() {
    const [step, setStep] = useState<number>(1);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    function handleSignUpNewsletter (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (step == 1) return setStep(2);
        
        SubmitSignUpNewsLetter();
    }

    async function SubmitSignUpNewsLetter () {
        const { ok } = await fetch('http://localhost:4000/register-email', {
            method: 'POST',
            body: JSON.stringify({ emailAddress: email, name: 'Marcus' }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!ok) return alert('Não conseguimos realizar a operação, verifique teu e-mail.')
        
        alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}.`)       
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
            {
                step === 1 ? (
                    <input
                        onChange={({ target: { value } }) => setName(value)}
                        value={name}
                        required
                        placeholder="Insira seu nome"
                        type="text"
                    />
                ) : (
                    <input
                        value={email}
                        onChange={({ target: { value } }) => setEmail(value)}
                        required
                        placeholder="Insira seu e-mail"
                        type="email"
                    />
                )
            }
                <button
                    type="submit"
                    disabled={step == 1 ? !name.trim() : !email.trim()}
                    children={step == 1 ? "Continuar" : "Assinar newsletter"}
                />
            </div> 
        </FormSignUpNewsletter>
    )
}