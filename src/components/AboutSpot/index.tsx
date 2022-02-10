import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import {
    FaInstagram,
    FaWhatsapp,
    FaFacebook,
    FaTwitter,
    FaLinkedinIn,
    FaRegClock,
} from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { AddressType } from '../../@types/Address';
import { OpeningHoursType } from '../../@types/OpeningHours';
import { PhoneType } from '../../@types/Phone';
import { SocialMediaType } from '../../@types/SocialMedia';
import { CheckIcon } from './styles';

interface IAboutSpotProps {
    title: string;
    price?: string;
    addresses: AddressType[];
    phones: PhoneType[];
    email: string;
    socialMedias: SocialMediaType[];
    openingHours: OpeningHoursType[];
}

const icons = {
    Facebook: FaFacebook,
    Instagram: FaInstagram,
    Twitter: FaTwitter,
    LinkedIn: FaLinkedinIn,
};

const AboutSpot: React.FC<IAboutSpotProps> = ({
    title,
    addresses,
    phones,
    email,
    socialMedias,
    openingHours,
}) => {
    return (
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
                                <h2 className="fs-5 m-0">{phone.nome}</h2>
                                <h2 className="fs-5 m-0">{phone.number}</h2>
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
                <li className="d-flex align-items-center list-unstyled col pb-2">
                    {socialMedias.map(socialMedia => {
                        const Icon = icons[socialMedia.nome];
                        return (
                            <>
                                <CheckIcon className="px-2 text-secondary fs-5">
                                    <CheckIcon>
                                        <Icon />
                                    </CheckIcon>
                                </CheckIcon>
                                <h2 className="px-2 fs-5 m-0">
                                    <a
                                        href={socialMedia.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-decoration-none"
                                    >
                                        {socialMedia.user}
                                    </a>
                                </h2>
                            </>
                        );
                    })}
                </li>
                <li className="list-unstyled col pb-1">
                    <div className="d-flex my-3">
                        <CheckIcon className="px-2 text-secondary fs-5">
                            <FaRegClock />
                        </CheckIcon>
                        <div className="d-flex flex-column">
                            {openingHours.map(info => (
                                <div className="d-flex flex-column mb-2">
                                    {info.is24 ? (
                                        <div className="px-2">
                                            <h2 className="px-2 fs-5 m-0">
                                                Aberto 24 horas
                                            </h2>
                                        </div>
                                    ) : (
                                        <div className="px-2 pt-1">
                                            <h2 className="d-flex fs-5 m-0">
                                                <h3 className="fw-bold fs-5 me-2">
                                                    {info.label}
                                                </h3>{' '}
                                                {info.horario.abre} às{' '}
                                                {info.horario.fecha}
                                            </h2>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default AboutSpot;
