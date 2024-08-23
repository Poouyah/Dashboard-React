import React from 'react'
import { useState } from 'react'
import { Link , useParams} from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import data from '../../Datas/ProductSale'
import productsData from '../../Datas/Product'
import PublishIcon from '@mui/icons-material/Publish';
import './Product.css'

export default function Product() {
  const param = useParams()
  const [product] = useState(productsData.find((pro) => pro.id === +param.productId))

  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link>
                <button className="productAddBtn">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart title='Sale In Month' data={data} dataKey={'sale'}/>
            </div>
            <div className="productTopRight">
                <div className="productTopInfo">
                    <img src={product.image} alt="Product" className="productTopImg" />
                    <span className="productTopName">{product.title}</span>
                </div>
                <div className="productBottomInfo">
                    <div className="productInfoItem">
                        <div className="productInfoKey">ID:</div>
                        <div className="productInfoVal">{product.id}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">Name:</div>
                        <div className="productInfoVal">{product.title}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">Price:</div>
                        <div className="productInfoVal">{product.price}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">Active:</div>
                        <div className="productInfoVal">Yes</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">In Stock:</div>
                        <div className="productInfoVal">No</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <h3 className='productBottomTitle'>Edit Info</h3>
            <form className='productForm'>
                <div className="productFormLeft">
                    <label htmlFor="productInput1">Product Name</label>
                    <input type="text" id="productInput1" placeholder={product.title}/>
                    <label htmlFor="productInput2">In Stock</label>
                    <select id="productInput2">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <label htmlFor="productInput3">Active</label>
                    <select id="productInput3">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src={product.image} alt="Product" className="productUploadImg" />
                        <label><PublishIcon /></label>
                        <input type="file" className='productUploadInput'/>
                    </div>
                    <button className='productUploadBtn'>Edit</button>
                </div>
            </form>
        </div>
    </div>
  )
}
