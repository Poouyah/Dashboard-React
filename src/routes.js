import Home from './pages/home/Home'
import Users from './pages/users/Users'
import NewUser from './pages/newUser/NewUser'
import Products from './pages/products/Products'
import Product from './pages/product/Product'

let routes = [
    {path : '/' , element : <Home/> },
    {path : '/users' , element : <Users/> },
    {path : '/newUser' , element : <NewUser/> },
    {path : '/products' , element : <Products/> },
    {path : '/product/:productId' , element : <Product/> },
]

export default routes