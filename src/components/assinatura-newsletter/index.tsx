import './index.scss';

export default function AssinaturaNewsletter() {
    function handleSignUpNewsletter (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // register e-mail...
    }

    return (
        <form id="form-signup-newsletter" onSubmit={handleSignUpNewsletter}>
            <small>A sua casa com as</small>
            <strong className='strong-elsie'>melhores plantas</strong>
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
        </form>
    )
}