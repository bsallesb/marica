/* eslint-disable camelcase */
import { AddressType } from './Address';
import { CategoryType } from './Category';
import { ImageType } from './Image';
import { InfoType } from './Information';
import { OpeningHoursType } from './OpeningHours';
import { PhoneType } from './Phone';
import { SocialMediaType } from './SocialMedia';

export type HotelType = {
    nome: string;
    id: number;
    capa: string;
    quartos: number;
    leitos: number;
    cafe_manha: boolean;
    cafe_hospedes: boolean;
    almoco: boolean;
    almoco_hospedes: boolean;
    jantar: boolean;
    jantar_hospedes: boolean;
    site: string;
    restricoes: InfoType[];
    categorias: CategoryType[];
    enderecos: AddressType[];
    descricao_t: string;
    estruturas: InfoType[];
    images: ImageType[];
    phones: PhoneType[];
    email: string;
    addresses: AddressType[];
    redes: SocialMediaType[];
    horario_funcionamento: OpeningHoursType[];
    formas_pagamento: InfoType[];
};
