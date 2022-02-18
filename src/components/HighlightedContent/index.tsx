import {
    FaBed,
    FaMotorcycle,
    FaRoute,
    FaTicketAlt,
    FaUmbrellaBeach,
    FaUniversity,
} from 'react-icons/fa';
import { MdRestaurant, MdStore } from 'react-icons/md';
import { GiMicrophone, GiFlowerPot } from 'react-icons/gi';
import { BsCalendarDayFill } from 'react-icons/bs';

import { Section } from './styled';
import HighlightedCard from '../HighlightedCard';

const HighlightedContent: React.FC = () => (
    <Section className="align-self-stretch pb-5">
        <div className="row row-cols-3 justify-content-center gy-4">
            <HighlightedCard
                title="Pontos Turísticos"
                description="Conheça nossas praias, lagoas, grutas e outros pontos turísticos"
                url="/pontos-turisticos"
                icon={FaUmbrellaBeach}
            />
            <HighlightedCard
                title="Hotéis e Pousadas"
                description="Saiba onde se hospedar em Maricá"
                url=""
                icon={FaBed}
            />
            <HighlightedCard
                title="Bares e Restaurantes"
                description="Aprecie a gastronomia de Maricá"
                url=""
                icon={MdRestaurant}
            />
            <HighlightedCard
                title="Delivery"
                description="Receba o melhor de Maricá no conforto da sua casa"
                url=""
                icon={FaMotorcycle}
            />
            <HighlightedCard
                title="Comércio Local"
                description="Veja onde fazer as suas compras"
                url=""
                icon={MdStore}
            />
            <HighlightedCard
                title="Cupons de Desconto"
                description="As melhores promoções para curtir a cidade"
                url=""
                icon={FaTicketAlt}
            />
            <HighlightedCard
                title="Espaços para Eventos"
                description="Locais para fazer suas festas ou reuniões"
                url=""
                icon={GiMicrophone}
            />
            <HighlightedCard
                title="Eventos"
                description="Confira o calendário de eventos da cidade"
                url=""
                icon={BsCalendarDayFill}
            />
            <HighlightedCard
                title="Roteiros Turisticos"
                description="Conheça diversas trilhas ecológicas e de aventura, com variados níveis de dificuldade"
                url=""
                icon={FaRoute}
            />
            <HighlightedCard
                title="Artesanato"
                description="Conheça e compre as criações dos artesãos de Maricá/RJ"
                url=""
                icon={GiFlowerPot}
            />
            <HighlightedCard
                title="Sobre a Cidade"
                description="Conheça mais sobre Maricá"
                url="/sobre-a-cidade"
                icon={FaUniversity}
            />
        </div>
    </Section>
);

export default HighlightedContent;
