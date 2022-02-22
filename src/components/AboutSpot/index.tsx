import { AiOutlineMail } from 'react-icons/ai';
import { BsGlobe2, BsTelephone } from 'react-icons/bs';
import {
    FaInstagram,
    FaWhatsapp,
    FaFacebook,
    FaTwitter,
    FaLinkedinIn,
    FaRegClock,
} from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
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
    websites?: string;
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
    websites,
}) => {
    return (
        <div className="mt-5">
            <h1 className="fs-4 fw-bold border-bottom pb-2 border-2 mb-4">
                {title}
            </h1>
            <ul className="align-items-center p-0 pb-2">
                {addresses && (
                    <li className="d-flex align-items-center list-unstyled col pb-2">
                        <CheckIcon className="px-2 text-secondary fs-5">
                            <HiOutlineLocationMarker color="#6ebd00" />
                        </CheckIcon>
                        {addresses.map(address => (
                            <h2 className="px-2 fs-6 m-0" key={address.id}>
                                {address.label}
                            </h2>
                        ))}
                    </li>
                )}
                {phones && (
                    <li className="align-items-center list-unstyled col pb-2">
                        {phones.map(phone => (
                            <div
                                key={phone.id}
                                className="d-flex my-2 align-items-center"
                            >
                                {phone.whatsapp ? (
                                    <CheckIcon className="px-2 text-secondary fs-5">
                                        <FaWhatsapp color="#6ebd00" />
                                    </CheckIcon>
                                ) : (
                                    <CheckIcon className="px-2 text-secondary fs-5">
                                        <BsTelephone color="#6ebd00" />
                                    </CheckIcon>
                                )}
                                <div className="d-flex flex-column px-2">
                                    <h2 className="fs-6 m-0">{phone.nome}</h2>
                                    <h2 className="fs-6 m-0">{phone.number}</h2>
                                </div>
                            </div>
                        ))}
                    </li>
                )}
                {email && (
                    <li className="d-flex align-items-center list-unstyled col pb-2">
                        <CheckIcon className="px-2 text-secondary fs-5">
                            <AiOutlineMail />
                        </CheckIcon>
                        <h2 className="px-2 fs-6 m-0">{email}</h2>
                    </li>
                )}
                {websites && (
                    <li className="d-flex align-items-center list-unstyled col pb-2">
                        <CheckIcon className="px-2 text-secondary fs-5">
                            <BsGlobe2 />
                        </CheckIcon>
                        <h2 className="px-2 fs-6 m-0">
                            <a
                                href={websites}
                                target="_blank"
                                rel="noreferrer"
                                className="text-decoration-none"
                            >
                                {websites}
                            </a>
                        </h2>
                    </li>
                )}
                {socialMedias && (
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
                                    <h2 className="px-2 fs-6 m-0">
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
                )}
                {Array.isArray(openingHours) && openingHours.length > 0 && (
                    <li className="list-unstyled col">
                        <div className="d-flex my-3">
                            <CheckIcon className="px-2 text-secondary fs-5">
                                <FaRegClock />
                            </CheckIcon>
                            <div className="d-flex flex-column">
                                {openingHours.map(info => (
                                    <div
                                        className="d-flex flex-column"
                                        key={info.label}
                                    >
                                        {info.is24 ? (
                                            <div className="px-2">
                                                <h2 className="px-2 fs-6 m-0">
                                                    Aberto 24 horas
                                                </h2>
                                            </div>
                                        ) : (
                                            <div className="px-2 pt-1">
                                                <h2 className="d-flex fs-6 m-0">
                                                    <h3
                                                        style={{ width: 102 }}
                                                        className="fw-bold fs-6 me-2"
                                                    >
                                                        {info.label}
                                                    </h3>{' '}
                                                    <h3 className="ps-3 fs-6 me-2">
                                                        {info.horario.abre} às{' '}
                                                        {info.horario.fecha}
                                                    </h3>
                                                </h2>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default AboutSpot;
