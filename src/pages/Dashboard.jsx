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
                        <td>this text will change</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>


                    </tr>
                    <tr className="header-data">
                        <td className="dashboard-table-header-gig">GIG</td>
                        <td></td>
                        <td>IMPRESSIONS</td>
                        <td>CLICKS</td>
                        <td>ORDERS</td>
                        <td className="dashboard-table-header-cancellation">CANCELLATIONS</td>
                        <td></td>

                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="dahsboard-gig-img">
                            image here
                        </td>
                        <td className="dahsboard-title">
                            <div>
                                gig title here
                            </div>
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0%</td>
                        <td className="dashboard-dropdown">
                            <div>
                                <a></a>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </article>
}