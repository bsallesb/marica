import { AddressType } from './Address';
import { CategorieType } from './Categorie';
import { InfoType } from './Information';
import { TravellerType } from './Travaller';

export type SpotType = {
    nome: string;
    id: number;
    capa: string;
    categorias: CategorieType[];
    enderecos: AddressType[];
    // eslint-disable-next-line camelcase
    descricao_t: string;
    estruturas: InfoType[];
    restricoes: InfoType[];
    viajantes: TravellerType[];
    gratuito: boolean;
    preco_t: string;
};
