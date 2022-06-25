import { useEffect, useState } from 'react';
import AssinaturaNewsletter from '../../components/assinatura-newsletter';
import Menu from '../../components/Menu';
import { MediumElsie, SmallElsie, StrongElsie } from '../../Global/Styles';
import HomePage, { BuyLink, Hero, HowToGet, HowToGetPlantImage, MeetOurOffers, Offer, PlantImage, PlantsWrapper, SellingPlants } from './styles';

interface IPlant {
    id: number
    name: string
    price: number
}

export default function Home() {
    const [plants, setPlants] = useState<IPlant[]>([]);

    async function fetchPlants() {
        const response = await fetch('http://localhost:4000/plants', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        
        setPlants(await response.json());
    }

    useEffect(() => {
        fetchPlants();
    }, [])

    return (
        <HomePage>
            <Hero />

            <Menu />

            <AssinaturaNewsletter />
           
            <PlantsWrapper>
                <HowToGet>
                    <HowToGetPlantImage />
                    <aside>
                        <label>Como conseguir</label>
                        <SmallElsie>Minha planta</SmallElsie>
                        <ol>
                            {['Escolha suas plantas', 'Faça seu pedido', 'Aguarde na sua casa'].map(step => <li key={step}>{step}</li>)}
                        </ol>
                    </aside>
                </HowToGet>

                <MeetOurOffers>Conheça nossas<MediumElsie>ofertas</MediumElsie></MeetOurOffers>
                
                <SellingPlants>
                    {
                        plants.map(plant => (
                            <Offer>
                                <PlantImage src={'http://localhost:4000/public/images/' + plant.name.replace(/\s/, '-') + '.png'} />
                                <span>
                                    <SmallElsie>{plant.name}</SmallElsie>
                                    <small>R$ {plant.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</small>
                                    <BuyLink>Comprar</BuyLink>
                                </span>
                            </Offer>
                        ))
                    }
                </SellingPlants>
            </PlantsWrapper>
        </HomePage>
    )
}