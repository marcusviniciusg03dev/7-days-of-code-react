import { AppLogo, AppMenu, NavigationList, NavigationListItem } from './styles';

export default function Menu() {
    return (
        <AppMenu>
            <AppLogo />

            <nav>
                <NavigationList>
                    {
                        [
                            'Como fazer',
                            'Ofertas',
                            'Depoimentos',
                            'Videos',
                            'Meu carrinho'
                        ].map((link, index, array) => (
                            <NavigationListItem>
                                <a href={`/${link.replace(/\s/g, '-').toLowerCase()}`}>
                                    {link}
                                </a>
                                {array.length !==  index + 1 && <span>/</span>}
                            </NavigationListItem>
                        ))
                    }
                </NavigationList>
            </nav>
        </AppMenu>
    )
}