import { Adress } from "./Adress";
import { Categories } from "./Categories";

export type SpotType = {
    nome: string;
    id: number;
    capa: string;
    categorias: Categories;
    enderecos: Adress
};