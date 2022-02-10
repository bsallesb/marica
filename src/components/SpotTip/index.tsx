interface SpotTipProps {
    title: string;
    tip: string;
}

const SpotTip: React.FC<SpotTipProps> = ({ title, tip }) => (
    <div className="mt-5">
        <h1 className="fs-4 fw-bold border-bottom pb-2 border-2 mb-4">
            {title}
        </h1>
        <ul className="p-0 pb-3">
            <li className="list-unstyled col pb-4">
                <p style={{ whiteSpace: 'pre-wrap' }} className="px-2 fs-5 m-0">
                    {tip}
                </p>
            </li>
        </ul>
    </div>
);

export default SpotTip;
