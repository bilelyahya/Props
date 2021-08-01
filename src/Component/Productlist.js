import React from "react";
import Productitem from "./Productitem";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';

const Productlist = ({ produits }) => {
  const click =(name)=>{
    alert(`this model is ${name}`)
  }
  return (
    <div>
      <Table striped bordered hover size="sm" className="container">
        <thead>
          <tr>
            <th>#</th>
            <th>Model</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {produits.map((element) => (
            <Productitem items={element} click={click}/>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
Productlist.propTypes={
  produits :PropTypes.array
}

export default Productlist;
