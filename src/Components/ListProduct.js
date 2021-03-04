import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import axios from "axios";
import PropTypes from "prop-types";

function ListProduct({ data, setClick, setFormData, setProducts }) {
  const onClickHandler = (event, index, value) => {
    setClick(index);
    setFormData(value);
  };
  const btnDeleteOnClick = function (event, value, index) {
    event.stopPropagation();
    console.log(value, "--", index);
    const deleteApiUrl =
      "https://60122a0d5fffd80017089437.mockapi.io/products/" + value.id;
    axios.delete(deleteApiUrl).then(function (response) {
      const listNew = data.filter(function (val, idx) {
        if (idx === index) {
          // loai bo phan tu
          return false;
        } else {
          return true;
        }
      });
      setProducts(listNew);
    });
  };
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell> ID </TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((value, index) => {
          return (
            <TableRow
              onClick={(event) => {
                onClickHandler(event, index, value);
              }}
              key={index}
            >
              <TableCell> {value.id}</TableCell>
              <TableCell> {value.name}</TableCell>
              <TableCell> {value.price}</TableCell>
              <Button
                onClick={(event) => {
                  btnDeleteOnClick(event, value, index);
                }}
                color="secondary"
              >
                Delete
              </Button>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

ListProduct.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired
  ),
};
export default ListProduct;
