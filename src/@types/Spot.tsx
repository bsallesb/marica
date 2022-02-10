/* eslint-disable camelcase */
import { AddressType } from './Address';
import { CategorieType } from './Categorie';
import { ImageType } from './Image';
import { InfoType } from './Information';
import { PhonesType } from './Phone';
import { SocialmediaType } from './Socialmedia';
import { TravellerType } from './Travaller';

export type SpotType = {
    nome: string;
    id: number;
    capa: string;
    categorias: CategorieType[];
    enderecos: AddressType[];
    descricao_t: string;
    estruturas: InfoType[];
    restricoes: InfoType[];
    viajantes: TravellerType[];
    gratuito: boolean;
    preco_t: string;
    images: ImageType[];
    phones: PhonesType[];
    email: string;
    addresses: AddressType[];
    redes: SocialmediaType[];
};
