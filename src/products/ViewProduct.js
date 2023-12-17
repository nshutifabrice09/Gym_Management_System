import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function UserTable() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async()=>{
    const result = await axios.get("http://localhost:8080/products");
    console.log(result.data);
    setProducts(result.data);
  }

  return (
    <div>
        <div className='py-4'>
        <table className="table boarder shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Code</th>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Status</th> 
      <th scope="col">Action</th>     
    </tr>
  </thead>
  <tbody>
      {
        products.map((product)=>(
          <tr>
            <td>{product.id}</td>
            <td>{product.productCode}</td>
            <td>{product.product_name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.status}</td>
            
            <td>
            <button className='btn btn-outline-primary mx-2'>Edit</button>
              <button className='btn btn-danger mx-2'>Delete</button>
            </td>

          </tr>
        ))


      }

    
  </tbody>
</table>
        </div>
    </div>

  )
}
