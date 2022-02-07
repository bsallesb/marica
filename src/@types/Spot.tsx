import { AddressType } from './Address';
import { CategorieType } from './Categorie';

export type SpotType = {
    nome: string;
    id: number;
    capa: string;
    categorias: CategorieType[];
    enderecos: AddressType[];
    name: string;
};
