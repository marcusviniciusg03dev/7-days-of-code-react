import './index.scss';
import Logo from '../../assets/logo.svg'

export default function Menu() {
    return (
        <header id="app-menu">
            <img
                src={Logo}
                alt="logo"
                />

            <nav>
                <ul>
                    {
                        [
                            'Como fazer',
                            'Ofertas',
                            'Depoimentos',
                            'Videos',
                            'Meu carrinho'
                        ].map((link, index, array) => (
                            <li>
                                <a href={`/${link.replace(/\s/g, '-').toLowerCase()}`}>
                                    {link}
                                </a>
                                {array.length !==  index + 1 && <span>/</span>}
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}