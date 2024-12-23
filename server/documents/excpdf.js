module.exports = ({ excursions, classes, trips }) => {
    // Function to find class and trip details for an excursion
    const getClassAndTripDetails = (exc) => {
        const classDetails = classes.find(cls => cls.class_id === exc.classClassId)?.name || "Unknown Class";
        const tripDetails = trips.find(trp => trp.trip_id === exc.tripTripId)?.point_of_interest || "Unknown Trip";
        return `${classDetails} - ${tripDetails}`;
    };

    // Generate rows for each excursion
    const excursionRows = excursions.map(exc => {
        const details = getClassAndTripDetails(exc);
        return `
            <tr class="item">
                <td>${details} (${exc.date})</td>
            </tr>
        `;
    }).join('');

    // Generate the full HTML template
    return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Excursions</title>
                <style>
                    .invoice-box {
                        max-width: 800px;
                        margin: auto;
                        padding: 30px;
                        border: 1px solid #eee;
                        box-shadow: 0 0 10px rgba(0, 0, 0, .15);
                        font-size: 16px;
                        line-height: 24px;
                        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
                        color: #555;
                    }
                    .invoice-box table {
                        width: 100%;
                        line-height: inherit;
                        text-align: left;
                    }
                    .invoice-box table td {
                        padding: 5px;
                        vertical-align: top;
                    }
                    .invoice-box table tr.heading td {
                        background: #eee;
                        border-bottom: 1px solid #ddd;
                        font-weight: bold;
                    }
                    .invoice-box table tr.item td {
                        border-bottom: 1px solid #eee;
                    }
                    @media only screen and (max-width: 600px) {
                        .invoice-box table tr.top table td {
                            width: 100%;
                            display: block;
                            text-align: center;
                        }
                        .invoice-box table tr.information table td {
                            width: 100%;
                            display: block;
                            text-align: center;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="invoice-box">
                    <table cellpadding="0" cellspacing="0">
                        <tr class="top">
                            <td colspan="2">
                                <table>
                                    <tr>
                                        <td class="title">Excursions Report</td>
                                        <td>Date of report: ${new Date().toLocaleDateString()}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr class="heading">
                            <td>Excursion Details</td>
                        </tr>
                        ${excursionRows}
                    </table>
                </div>
            </body>
        </html>
    `;
};
