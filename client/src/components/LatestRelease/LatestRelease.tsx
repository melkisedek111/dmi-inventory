import React from 'react'
import { LatestReleaseContainer, LatestReleaseHeader, LatestReleaseTable } from './latestRelease.styled'
import Chip from '@mui/material/Chip';

const LatestRelease = () => {
    return (
        <LatestReleaseContainer>
            <LatestReleaseHeader>
                <h5>Latest Release</h5>
                <Chip label="Top 5" color="primary"/>
            </LatestReleaseHeader>
            <LatestReleaseTable>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>Qty</th>
                        <th>Datetime</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Applicator Stick</td>
                        <td>1</td>
                        <td>2023-06-21 06:20 AM</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Automated Hematology Analyzer (Rayto RT - 7300)	</td>
                        <td>1</td>
                        <td>2023-06-21 06:20 AM</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Borrosilicate test tubes</td>
                        <td>1</td>
                        <td>2023-06-21 06:20 AM</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Cuvettes</td>
                        <td>1</td>
                        <td>2023-06-21 06:20 AM</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Dengue NS1, 25's/kit, STANDARD Q	</td>
                        <td>5</td>
                        <td>2023-06-21 06:20 AM</td>
                    </tr>
                </tbody>
            </LatestReleaseTable>
        </LatestReleaseContainer>
    )
}

export default LatestRelease