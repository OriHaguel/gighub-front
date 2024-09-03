export function Dashboard() {
    return <article className="dashboard-container">

        <header>
            <h1>Gigs</h1>
        </header>

        <div className="dashboard-filter">
            <ul>
                <li><a href="">ACTIVE</a></li>
                <li><a href="">PENDING APPROVAL</a></li>
                <li><a href="">ACCEPTED</a></li>
                <li><a href="">DENIED</a></li>
            </ul>
            <a href="" className="dashboard-create-gig-btn">CREATE A NEW GIG</a>
        </div>

        <div className="dashboard-data-container">
            <table>

                <thead>
                    <tr className="header-filter">
                        <td>this text will change depand on the filter</td>

                    </tr>
                    <tr className="header-data">
                        <td className="dashboard-table-header-gig">GIG</td>
                        <td>IMPRESSIONS</td>
                        <td>CLICKS</td>
                        <td>ORDERS</td>
                        <td className="dashboard-table-header-cancellation">CANCELLATIONS</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </article>
}