import React from "react";
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Stocktable.css"

function Stocktable() {
    return (
      <div>
        



        {/* table start */}
        <div className="table">

        <div className="stock_heading">
          <h1> -STOCK INFO- </h1>
          {/* <p>Keep track of Every Unit in Your Inventory</p> */}
          <br/>
        </div>

          <FloatingLabel
            controlId="Item_code"
            label="Item Code"
            className="mb-3"
          >
            <Form.Control type="Item Code" placeholder="Item Code" />
          </FloatingLabel>

          <FloatingLabel controlId="Item Name" label="Item Name">
            <Form.Control type="text" placeholder="Item Name" />
          </FloatingLabel>
          <br />

          <FloatingLabel controlId="Quantity" label="Quantity">
            <Form.Control type="Numbers" placeholder="Quantity" />
          </FloatingLabel>
          <br />

          <FloatingLabel controlId="Supplier_ID" label="Supplier ID">
            <Form.Select aria-label="">
              <option>Supplier List</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
          <br />

          <FloatingLabel
            controlId="floatingTextarea"
            label="Description"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>

          <br />
          <br />

          {/* <div className="mb-2">
          <Button variant="secondary" size="lg">
            submit
          </Button>
          </div> */}



          <div className="d-grid gap-2">
          <Button variant="secondary" size="lg">
            Submit
          </Button>
        </div>


        </div>

        {/* table End */}
      </div>
    );
}

export default Stocktable;