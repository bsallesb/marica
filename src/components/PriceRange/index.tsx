import { useMemo } from 'react';
import { MdOutlineAttachMoney } from 'react-icons/md';

interface PriceRangeProps {
    title: string;
    amount: number;
}

const PriceRange: React.FC<PriceRangeProps> = ({ title, amount }) => {
    const priceArray = useMemo(
        () => [...Array(5)].map((_, index) => index < amount),
        [amount]
    );

    return (
        <div className="mt-5">
            <h1 className="fs-4 fw-bold border-bottom pb-2 border-2 mb-4">
                {title}
            </h1>
            <ul className="align-items-center p-0 row row-cols-3 pb-3">
                <li className="d-flex align-items-center list-unstyled col pb-4">
                    {priceArray.map(price => (
                        <div
                            className={`px-2 text-${
                                price ? 'secondary' : 'muted'
                            }`}
                        >
                            <MdOutlineAttachMoney />
                        </div>
                    ))}
                </li>
            </ul>
        </div>
    );
};

export default PriceRange;
