import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/*
create simple dummy contact form, where you ask name, email, telephone number and free text in a form

*/

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Phone:</Form.Label>
          <Form.Control type="text" placeholder="Phone" />
        </Form.Group>
        <Form.Label>Free text:</Form.Label>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
