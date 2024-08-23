import React from 'react'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import data from '../../Datas/Product'
import './Products.css'

export default function Products() {

  const [products, setProducts] = useState(data)
  const column = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to='/' className='link'>
            <div className='userContainer'>
              <img src={params.row.image} alt="Products" className='userImg' />
              {params.row.title}
            </div>
          </Link>
        )
      }
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 120
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className='userAction'>
            <Link to={`/product/${params.row.id}`} className='link'>
              <button className='userEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='userDel' onClick={()=> deleteProduct(params.row.id)} />
          </div>
        )
      }
    },
  ]


  const deleteProduct = (id) => {
    const updated = products.filter(products => products.id !== id)
    setProducts(updated)
  }

  return (
    <div className="users">
      <DataGrid
        rows={products}
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
