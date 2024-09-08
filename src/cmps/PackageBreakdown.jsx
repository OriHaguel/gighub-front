import CheckIcon from '..//assets/svg/CheckIcon.svg?react'

export function PackageBreakdown({ gig }) {

    const packages = {
        Basic: {
            type: 'Basic',
            price: Math.round(gig.price),
            daysToMake: gig.daysToMake + 4,
            revisions: 2,
            pages: 3,
            assets: 1
        },
        Standard: {
            type: 'Standart',
            price: Math.round(gig.price * 1.2),
            daysToMake: gig.daysToMake + 2,
            revisions: 4,
            pages: 5,
            assets: 2
        },
        Premium: {
            type: 'Premium',
            price: Math.round(gig.price * 1.5),
            daysToMake: gig.daysToMake,
            revisions: 6,
            pages: 7,
            assets: 3
        }
    }

    return (
        <div className="gig-page-packages-table">
            <h2 className="section-title">Compare packages</h2>
            <table>
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead>
                    <tr className="package-type">
                        <th className="package-row-label">Package</th>
                        {Object.keys(packages).map(pkg => (
                            <th key={pkg} className="package-type-price">
                                <div className="price-wrapper">
                                    <p className="price">${packages[pkg].price}</p>
                                </div>
                                <b className="type">{packages[pkg].type}</b>
                                <b className="title">{pkg}</b>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr className="description">
                        <td className="package-row-label"></td>
                        {Object.keys(packages).map(pkg => (
                            <td key={pkg}>{packages[pkg].description}</td>
                        ))}
                    </tr>
                    <tr>
                        <td className="package-row-label">
                            <div>
                                <span >Functional Product</span>
                            </div>
                        </td>
                        {Object.keys(packages).map(pkg => (
                            <td key={pkg}>
                                {packages[pkg].pages > 0 ? (
                                    <span >
                                        <CheckIcon />
                                    </span>
                                ) : null}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="package-row-label">
                            <div >
                                <span>Responsive Design</span>
                            </div>
                        </td>
                        {Object.keys(packages).map(pkg => (
                            <td key={pkg}>
                                {packages[pkg].pages > 0 ? (
                                    <span >
                                        <CheckIcon />
                                    </span>
                                ) : null}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="package-row-label">
                            <div >
                                <span>Content Upload</span>
                            </div>
                        </td>
                        {Object.keys(packages).map(pkg => (
                            <td key={pkg}>
                                {packages[pkg].assets > 0 ? (
                                    <span>
                                        <CheckIcon />
                                    </span>
                                ) : null}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <footer className="tab-footer">
            </footer>
        </div>
    )
}
