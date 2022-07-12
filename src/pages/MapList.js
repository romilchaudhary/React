import { Table, Form, Button } from "react-bootstrap";
import Reuseable from "../component/Reuseable";

function MapList() {
    const students = [
        { name: "romil", email: "romil@gmail.com", contact: "123", address:[
            {Hn:"11", city:"Roorkee", country:"India"},
            {Hn:"123", city:"Noida", country:"India"},
            {Hn:"222", city:"London", country:"UK"}
        ] },
        { name: "chinku", email: "abc@gmail.com", contact: "111" , address:[
            {Hn:"11", city:"Roorkee", country:"India"},
            {Hn:"123", city:"Noida", country:"India"},
            {Hn:"222", city:"London", country:"UK"}
        ]},
        { name: "kaanha", email: "kaanha@gmail.com", contact: "999", address:[
            {Hn:"11", city:"Roorkee", country:"India"},
            {Hn:"123", city:"Noida", country:"India"},
            {Hn:"222", city:"London", country:"UK"}
        ] }
    ]
    return (
        <div>
            <h1>Map List Example</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicContact">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control type="text" placeholder="Contact" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Table striped hover bordered size="sm">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>
                    {
                        students.map((item, i) =>
                            item.contact === "111" ?
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                    <td>
                                        <Table>
                                            <tbody>
                                                {
                                                    item.address.map((add, i) =>
                                                        <tr key={i}>
                                                            <td>{add.Hn}</td>
                                                            <td>{add.city}</td>
                                                            <td>{add.country}</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </Table>
                                    </td>
                                </tr> :
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default MapList;