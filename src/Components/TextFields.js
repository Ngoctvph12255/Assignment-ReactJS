import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
      width: "40ch",
    },
  },
}));

function TextFields({
  click,
  products,
  setProducts,
  formData: data,
  setFormData: setData,
  setClick,
}) {
  const classes = useStyles(); // dùng trong Material UI
  // const prop = click === -1 ? { id: "", price: "", name: "" } : products[click];

  // const [data, setData] = useState(prop);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    // prop[name] = value;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };

  const AddNew = function () {
    const creatApiUrl = "https://60122a0d5fffd80017089437.mockapi.io/products/";
    axios
      .post(creatApiUrl, data)
      .then((response) => {
        setProducts([...products, response.data]);
        setData({
          id: "",
          name: "",
          price: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const Update = function () {
    const updatApiUrl =
      "https://60122a0d5fffd80017089437.mockapi.io/products/" + data.id;

    axios
      .put(updatApiUrl, data)
      .then((response) => {
        const newProducts = products.map(function (value, index) {
          if (index === click) {
            return response.data;
          } else {
            return value;
          }
        });
        setProducts(newProducts);
      })
      .catch((err) => {
        console.log(err);
      });
    // setProducts((oldState) => {
    //   const newState = oldState.map((value, index) => {
    //     if (index === click) {
    //       return data;
    //     } else {
    //       return value;
    //     }
    //     /// tham số truyền vào  nó nhu calback
    //   });
    //   return newState;
    // });
  };
  // Sử dụng Button submit
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (click === -1) {
      //tạo mới
      // setProducts([...products, data]);
      AddNew();
    } else {
      // cập nhật
      Update();
    }
  };

  const btnDeleteHandler = (event) => {
    setClick(-1);
    setData({
      id: "",
      name: "",
      price: "",
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {/* Thêm các TextField */}
        <TextField
          className={classes.root}
          noValidate
          autoComplete="off"
          onChange={onChangeHandler}
          label="Id"
          value={data.id}
          name="id"
          id="outlined-basic"
          variant="outlined"
          disabled
        />

        <br />
        <TextField
          className={classes.root}
          noValidate
          autoComplete="off"
          onChange={onChangeHandler}
          label="Name"
          value={data.name}
          name="name"
          id="outlined-basic"
          variant="outlined"
        />
        <br />
        <TextField
          className={classes.root}
          noValidate
          autoComplete="off"
          onChange={onChangeHandler}
          label="Price"
          value={data.price}
          name="price"
          id="outlined-basic"
          variant="outlined"
        />

        {/* Thêm nút button */}
        <br />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            Submit
          </Button>

          <Button
            type="reset"
            onClick={btnDeleteHandler}
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginLeft: "20px" }}
            className={classes.button}
          >
            Delete form
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default TextFields;
