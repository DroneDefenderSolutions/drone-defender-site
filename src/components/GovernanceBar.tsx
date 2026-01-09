export default function GovernanceBar() {
    const items = [
        'Governance aligned',
        'Vendor neutral',
        'Confidentiality by default',
        'Evidence disciplined',
        'Operationally proven'
    ];

    return (
        <div className="governance-bar">
            {items.map((item, index) => (
                <div key={index} className="governance-bar-item">
                    {item}
                </div>
            ))}
        </div>
    );
}
