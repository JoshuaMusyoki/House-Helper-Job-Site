import { Box, Button, Paper, Typography } from '@mui/material';
import moment from 'moment';
import React, { useEffect } from 'react';
import {DataGrid, gridClasses, GridToolbar} from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allUserAction } from '../../redux/actions/userActions';
import AddIcon from '@mui/icons-material/Add';


const DashUsers = () => {
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(allUserAction());
    },[]);

    const {users, loading} = useSelector(state => state.allUsers);
    let data=[];
    data=(users !== undefined && users.length>0 )? users:[]

    const deleteUserById = (e, id)=>{
        console.log(id);
    }
    const columns =[
        {
            fied:'_id',
            headerName: 'User ID',
            width:150,
            editable:true

        },
        {
            field:'email',
            headerName:'E_mail',
            width:150
        },

        {
            field: 'role',
            headerName: 'User status',
            width: 150,
            renderCell: (params) => (
                params.row.role === 1 ? "Admin" : "Regular user"
            )
        },
        {
            field:'createdAt',
            headerName:'Creation Date',
            width:150,
            renderCell:(params)=>(
                moment(params.row.createdAt).format('YYYY-MM-DD : HH-MM-SS')
            )
        },
        {
            field:'actions',
            width:200,

            renderCell: (values)=>(
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "170px" }}>
                    <Button variant="contained"><Link style={{ color: "white", textDecoration: "none" }} to={`/employer/edit/user/${values.row._id}`}>Edit</Link></ Button>
                    < Button onClick={(e) => deleteUserById(e, values.row._id)} variant="contained" color="error">Delete</ Button>
                </Box>
            )
        }
    ];
    return(
        <Box>
            <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
                All Users
            </Typography>
            <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
                <Button variant='contained' color="success" startIcon={<AddIcon/>}> Create User</Button>
            </Box>
            <Paper sx={{ bgcolor: "secondary.midNightBlue" }} >

                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        sx={{

                            '& .MuiTablePagination-displayedRows': {
                                color: 'white',
                            },
                            color: 'white',
                            [`& .${gridClasses.row}`]: {
                                bgcolor: (theme) =>
                                    // theme.palette.mode === 'light' ? grey[200] : grey[900],
                                    theme.palette.secondary.main
                            },
                            button: {
                                color: '#ffffff'
                            }

                        }}
                        getRowId={(row) => row._id}
                        rows={data}
                        columns={columns}
                        pageSize={3}
                        rowsPerPageOptions={[3]}
                        checkboxSelection
                        slots={{ toolbar: GridToolbar }}
                    />
                </Box>
            </Paper>
        </Box>
    )
}

export default DashUsers