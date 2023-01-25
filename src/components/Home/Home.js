import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Home(props) {
  const [product, setProduct] = useState([]);

  const [aProduct, setAdd] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
  });
  useEffect(() => {
    axios.get("http://localhost:9093/o/products").then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  }, []);
  const handleDelete = (id) => {
    axios.get(`http://localhost:9093/o/productss/${id}`);
    console.log(id);
  };
  const handleProduct = () => {
    axios
      .post("http://localhost:9093/o/product", {
        id: "",
        name: "errrr",
        category: "errr@gmail.com",
        price: "",
      })
      .then((response) => {
        console.log(response.data);
        // setData(response.data);
        // setUseId(response.data.id);
      });
  };

  return (
    <div>
      {/* <div>
        <h1>Hii You have logged</h1>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div> */}

      <br />
      <br />
      <br />

      {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
      {/* <Navbar /> */}
      {/* <input type="text" placeholder="Enter id">
        {" "}
        Product ID
      </input>
      <input type="text" placeholder="Enter Name">
        {" "}
        Product ID
      </input>
      <input type="text" placeholder="Enter Category">
        {" "}
        Product ID
      </input>
      <input type="text" placeholder="Enter Price">
        {" "}
        Product ID
      </input> */}

      <button
        onClick={() => {
          handleProduct();
        }}
      >
        ADD PRODUCT
      </button>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
          </tr>
          {product.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>
                <button>EDIT</button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  DELTE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
