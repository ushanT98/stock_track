import React from "react";
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Supplierstable.css"

function Supplierstable() {
    return (
      <div>
        



        {/* table start */}
        <div className="table">

        <div className="supplier_heading">
          <h1> -SUPPLIER INFO- </h1>
          {/* <p>Keep track of Every Unit in Your Inventory</p> */}
          <br/>
        </div>

          <FloatingLabel
            controlId="Supplier_ID"
            label="Supplier_ID"
            className="mb-3"
          >
            <Form.Control type="Supplier ID" placeholder="Supplier ID" />
          </FloatingLabel>

          <FloatingLabel controlId="Supplier Name" label="Supplier Name">
            <Form.Control type="text" placeholder="Supplier Name" />
          </FloatingLabel>
          <br />

          <FloatingLabel controlId="Email" label="Email">
            <Form.Control type="email" placeholder="Email" />
          </FloatingLabel>
          <br />

          {/* <FloatingLabel controlId="Supplier_ID" label="Supplier ID">
            <Form.Select aria-label="">
              <option>Supplier List</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel> */}
          

          <FloatingLabel controlId="Contact" label="Contact No.">
            <Form.Control type="text" placeholder="Contact Details" />
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

export default Supplierstable;