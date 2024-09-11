import CheckIcon from '..//assets/svg/CheckIcon.svg?react'

export function PackageBreakdown({ gig }) {

    const packages = {
        Basic: {
            type: 'Basic',
            price: Math.round(gig.price),
            daysToMake: gig.daysToMake + 4,
            revisions: 2,
            pages: 3,
            assets: 1,
            seo: 2,
            graphics: 2,
            multilingual: 2,
            analytics: 2,
            support: 2,
            hosting: 2
        },
        Standard: {
            type: 'Standart',
            price: Math.round(gig.price * 1.2),
            daysToMake: gig.daysToMake + 2,
            revisions: 4,
            pages: 5,
            assets: 2,
            seo: 5,
            graphics: 5,
            multilingual: 5,
            analytics: 5,
            support: 5,
            hosting: 5
        },
        Premium: {
            type: 'Premium',
            price: Math.round(gig.price * 1.5),
            daysToMake: gig.daysToMake,
            revisions: 6,
            pages: 7,
            assets: 3,
            seo: 7,
            graphics: 7,
            multilingual: 7,
            analytics: 7,
            support: 7,
            hosting: 7
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
                                <b className="title"> Package</b>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr className="description">
                        <td className="package-row-label"></td>
                        {Object.keys(packages).map(pkg => (
                            <td key={pkg}></td>
                        ))}
                    </tr>
                    <tr>
                        <td className="package-row-label">
                            <div>
                                <span >Bonus Product Pages</span>
                            </div>
                        </td>
                        {Object.keys(packages).map(pkg => (
                            <td key={pkg}>
                                {packages[pkg].pages > 3 ? (
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
                    {/* <tr>
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
                    </tr> */}
                    <tr>
                        <td className="package-row-label">
                            <div>
                                <span>SEO Optimization</span>
                            </div>
                        </td>
                        {Object.keys(packages).map(pkg => (
                            <td key={pkg}>
                                {packages[pkg].seo > 2 ? (
                                    <span>
                                        <CheckIcon />
                                    </span>
                                ) : null}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="package-row-label">
                            <div>
                                <span>Custom Graphics</span>
                            </div>
                        </td>
                        {Object.keys(packages).map(pkg => (
                            <td key={pkg}>
                                {packages[pkg].graphics > 0 ? (
                                    <span>
                                        <CheckIcon />
                                    </span>
                                ) : null}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="package-row-label">
                            <div>
                                <span>Multilingual Support</span>
                            </div>
                        </td>
                        {Object.keys(packages).map(pkg => (
                            <td key={pkg}>
                                {packages[pkg].multilingual > 3 ? (
                                    <span>
                                        <CheckIcon />
                                    </span>
                                ) : null}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="package-row-label">
                            <div>
                                <span>Analytics Integration</span>
                            </div>
                        </td>
                        {Object.keys(packages).map(pkg => (
                            <td key={pkg}>
                                {packages[pkg].analytics > 0 ? (
                                    <span>
                                        <CheckIcon />
                                    </span>
                                ) : null}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="package-row-label">
                            <div>
                                <span>24/7 Support</span>
                            </div>
                        </td>
                        {Object.keys(packages).map(pkg => (
                            <td key={pkg}>
                                {packages[pkg].support > 5 ? (
                                    <span>
                                        <CheckIcon />
                                    </span>
                                ) : null}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="package-row-label">
                            <div>
                                <span>Hosting Included</span>
                            </div>
                        </td>
                        {Object.keys(packages).map(pkg => (
                            <td key={pkg}>
                                {packages[pkg].hosting > 0 ? (
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
