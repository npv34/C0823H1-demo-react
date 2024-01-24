import Table from 'react-bootstrap/Table';
import {Card} from "react-bootstrap";
import {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const users = [
    {
        id: 1,
        name: 'John',
        email: 'john@example.com',
        phone: "123-456",
        active: true
    },
    {
        id: 2,
        name: 'Mary',
        email: 'mary@example.com',
        phone: "123-456",
        active: true
    },
    {
        id: 3,
        name: 'Michael',
        email: 'michael@example.com',
        phone: "123-456-898",
        active: false
    }
]

function UserList() {
    const [data, setData] = useState(users);


    const activeUser = (index) => {
        data[index].active = !users[index].active;
        setData([...data])
    }

    const deleteUsers = (id) => {
        if (window.confirm("Are you sure you want to delete")) {
            const users = data.filter(user => user.id !== id)
            setData(users)
        }
    }

    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    { data.map((user, i) => (
                        <tr key={user.id}>
                            <td>{i + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Form>
                                    <Form.Check // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                        label={user.active ? 'Active' : 'Deactivated'}
                                        onChange={() => activeUser(i)}
                                        checked={user.active}
                                    />
                                </Form>
                            </td>
                            <td>
                                <Button variant="success">View</Button>
                                { !user.active && (
                                    <Button variant="danger" onClick={() => deleteUsers(user.id)}>Delete</Button>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>

    )

}

export default UserList;