import React from 'react'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import data from '../../Datas/Users'
import './Users.css'

export default function Users() {

  const [users, setUsers] = useState(data)
  const column = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to='/' className='link'>
            <div className='userContainer'>
              <img src={params.row.image} alt="User" className='userImg' />
              {params.row.username}
            </div>
          </Link>
        )
      }
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120
    },
    {
      field: 'transaction',
      headerName: 'TransAction',
      width: 160
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className='userAction'>
            <Link to={`/user/${params.row.id}`} className='link'>
              <button className='userEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='userDel' onClick={()=> deleteUser(params.row.id)} />
          </div>
        )
      }
    },
  ]


  const deleteUser = (id) => {
    const updated = users.filter(user => user.id !== id)
    setUsers(updated)
  }

  return (
    <div className="users">
      <DataGrid
        rows={users}
        columns={column}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={[4]}
        disableRowSelectionOnClick
        className='dataGrid'
      />
    </div>
  )
}
