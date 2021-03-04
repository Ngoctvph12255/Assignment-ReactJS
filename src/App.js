import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ListProduct from "./Components/ListProduct";
import TextFields from "./Components/TextFields";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [click, setClick] = useState(-1);

  const formDataInitValue = { id: "", name: "", price: "" };
  const [formData, setFormData] = useState(formDataInitValue);

  const urlParams = new URLSearchParams(window.location.search);
  let pageInt =
    urlParams.get("page") != null ? parseInt(urlParams.get("page")) : 1;
  const [page, setPage] = useState(pageInt);
  const limit = 10;
  const url =
    "https://60122a0d5fffd80017089437.mockapi.io/products?limit=" +
    limit +
    "&page=" +
    page;

  //API
  useEffect(() => {
    axios({
      method: "GET",
      url: url,
    })
      .then((response) => {
        const { data } = response;
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error, error.response);
      });
  }, [page]);
  const previousPage = function () {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };
  const nextPage = function () {
    setPage(page + 1);
    console.log("page: ", page);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          <TextFields
            products={products}
            setProducts={setProducts}
            formData={formData}
            setFormData={setFormData}
            click={click}
            setClick={setClick}
          />
          <ListProduct
            setClick={setClick}
            setFormData={setFormData}
            data={products}
            setProducts={setProducts}
          />
          <ul className="pagination mt-4">
            <li onClick={previousPage} className="page-item">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item">
              <a className="page-link">{page}</a>
            </li>
            <li onClick={nextPage} className="page-item">
              <a className="page-link">Next</a>
            </li>
          </ul>
        </Typography>
      </Container>
    </div>
  );
}
export default App;
