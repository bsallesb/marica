import { HiHome } from 'react-icons/hi';

import { AreaType } from '../../@types/Area';
import { Pluralize } from '../../utils/pluralize';

interface IEquipmentsProps {
    title: string;
    areas: AreaType[];
}

const Areas: React.FC<IEquipmentsProps> = ({ title, areas }) => (
    <div className="mt-5">
        <h1 className="fs-4 fw-bold border-bottom pb-2 border-2 mb-4">
            {title}
        </h1>
        <ul className="p-0 row row-cols-2 pb-3">
            {areas.map(area => (
                <li className="d-flex list-unstyled col pb-4" key={area.id}>
                    <div className="px-2 text-secondary">
                        <HiHome className="fs-4" />
                    </div>
                    <div>
                        <h2 className="px-2 fs-6 m-0 fw-bold pt-1">
                            {area.nome}
                        </h2>
                        {area.descricao && (
                            <h2 className="px-2 fs-6 m-0 pt-1 text-muted fst-italic">
                                {area.descricao}
                            </h2>
                        )}
                        {area.area && (
                            <h2 className="px-2 fs-6 m-0 pt-3 text-muted fst-italic">
                                Área: {area.area}m²
                            </h2>
                        )}
                        {area.pe_direito && (
                            <h2 className="px-2 fs-6 m-0 pt-2 text-muted fst-italic">
                                Pé direito: {area.pe_direito}m
                            </h2>
                        )}
                        {area.medidas && (
                            <h2 className="px-2 fs-6 m-0 pt-2 text-muted fst-italic">
                                Medidas: {area.medidas}
                            </h2>
                        )}
                        {area.capacidade && (
                            <h2 className="px-2 fs-6 m-0 pt-2 text-muted fst-italic">
                                Capacidade: {area.capacidade}{' '}
                                {Pluralize(
                                    'pessoa',
                                    'pessoas',
                                    area.capacidade
                                )}
                            </h2>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default Areas;
