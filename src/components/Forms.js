import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const forms = () => {
  return (
    <div>
      <Form>
      <fieldset disabled>
        <Form.Group className="mb-3" style={{width: "50%", margin: " 0 auto ", marginTop: "50px"}}>
          <Form.Label htmlFor="disabledTextInput">First name</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Latifa" />
        </Form.Group>
        <Form.Group className="mb-3" style={{width: "50%", margin: "0 auto" ,marginTop: "50 px "}}>
          <Form.Label htmlFor="disabledSelect">Last name</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Bouali</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" style={{width:"50% " , margin: "0 auto " , marginTop: "50px"}}>
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
          />
        </Form.Group>
        <Button type="submit" style={{display: "flex" , alignItems: "center" ,  margin: " 0 auto " , marginTop:"50 px" }}>Submit</Button>
      </fieldset>
    </Form>
    </div>
  )
}

export default forms
