/* eslint-disable camelcase */
import { AddressType } from './Address';
import { CategoryType } from './Category';
import { ImageType } from './Image';
import { InfoType } from './Information';
import { OpeningHoursType } from './OpeningHours';
import { PhoneType } from './Phone';
import { SocialMediaType } from './SocialMedia';
import { TravellerType } from './Travaller';

export type BusinessType = {
    nome: string;
    id: number;
    capa: string;
    is_delivery: number;
    categorias: CategoryType[];
    enderecos: AddressType[];
    descricao_t: string;
    estruturas: InfoType[];
    restricoes: InfoType[];
    viajantes: TravellerType[];
    gratuito: boolean;
    preco_t: string;
    images: ImageType[];
    phones: PhoneType[];
    email: string;
    addresses: AddressType[];
    redes: SocialMediaType[];
    horario_funcionamento: OpeningHoursType[];
    dicas_t: string;
    formas_pagamento: InfoType[];
};
