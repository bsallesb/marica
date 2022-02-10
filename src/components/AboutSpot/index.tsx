import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { AddressType } from '../../@types/Address';
import { PhonesType } from '../../@types/Phone';
import { SocialmediaType } from '../../@types/Socialmedia';

import { CheckIcon } from './styles';

interface IAboutSpotProps {
    title: string;
    price?: string;
    addresses: AddressType[];
    phones: PhonesType[];
    email: string;
    socialmidias: SocialmediaType[];
}

const AboutSpot: React.FC<IAboutSpotProps> = ({
    title,
    addresses,
    phones,
    email,
    socialmidias,
}) => (
    <div className="mt-5">
        <h1 className="fs-4 fw-bold border-bottom pb-2 border-2 mb-4">
            {title}
        </h1>
        <ul className="align-items-center p-0 pb-3">
            <li className="d-flex align-items-center list-unstyled col pb-2">
                <CheckIcon className="px-2 text-secondary fs-5">
                    <GrLocation />
                </CheckIcon>
                {addresses.map(address => (
                    <h2 className="px-2 fs-5 m-0">{address.label}</h2>
                ))}
            </li>
            <li className="align-items-center list-unstyled col pb-2">
                {phones.map(phone => (
                    <div className="d-flex my-3 align-items-center">
                        {phone.whatsapp ? (
                            <CheckIcon className="px-2 text-secondary fs-5">
                                <FaWhatsapp />
                            </CheckIcon>
                        ) : (
                            <CheckIcon className="px-2 text-secondary fs-5">
                                <BsTelephone />
                            </CheckIcon>
                        )}
                        <div className="d-flex flex-column px-2">
                            <h2 className="px-2 fs-5 m-0">{phone.nome}</h2>
                            <h2 className="px-2 fs-5 m-0">{phone.number}</h2>
                        </div>
                    </div>
                ))}
            </li>
            <li className="d-flex align-items-center list-unstyled col pb-4">
                <CheckIcon className="px-2 text-secondary fs-5">
                    <AiOutlineMail />
                </CheckIcon>
                <h2 className="px-2 fs-5 m-0">{email}</h2>
            </li>
            <li className="d-flex align-items-center list-unstyled col pb-4">
                {socialmidias.map(socialmidia => (
                    <>
                        <CheckIcon className="px-2 text-secondary fs-5">
                            {socialmidia.icone}
                        </CheckIcon>
                        <h2 className="px-2 fs-5 m-0">
                            <a
                                href={socialmidia.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-decoration-none"
                            >
                                {socialmidia.user}
                            </a>
                        </h2>
                    </>
                ))}
            </li>
        </ul>
    </div>
);

export default AboutSpot;
