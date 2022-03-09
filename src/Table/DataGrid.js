import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'


const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'links', headerName: 'Image', width: 600, renderCell: (params)=>{
            return (
                <div>
                    <img src={params.value.self + '?'+accessToken} alt='' />
                    {/*{params.row.username}*/}
                </div>
            ) }}
]


const accessToken = "client_id=a9NwmJoc-tOPG3abC3Gk5UAIKnkdLv0qIevzRvTSzzU";
const DataGrids = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch('https://api.unsplash.com/topics?' + accessToken)
            .then((data) => data.json())
            .then((data) => setTableData(data))

    }, [])

    const [selectedTopic, setSelectedTopic] = React.useState([]);
    //
    // function currentlySelected(selections) {
    //     if (selectedTopic !== selections) { // I didn't write it in but you'll need to do object comparison here
    //         setSelectedTopic(selections)
    //     }
    //     console.log("here"+selectedTopic)
    // }
    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={12}
                // THIS is where Im stuck, the selected item does not set to selectedTopic
                onSelectionChange={(newSelection) => {
                    setSelectedTopic(newSelection.rows);
                    console.log("Hwee"+selectedTopic)
                }}
            />

            <h1>{console.log(selectedTopic)}</h1>
        </div>
    )
}

export default DataGrids
