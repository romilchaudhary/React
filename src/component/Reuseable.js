import {Table} from "react-bootstrap";
import Cols from "./Cols";
function Reuseable(props)
{
    return(
        <Table striped hover>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Address</th>
                </tr>
                {
                    props.data.map((item, i) => 
                        <tr key={i}>
                            <td>
                                {i+1}
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                            <td>
                                {item.contact}
                            </td>
                            <td>
                                <Table striped hover>
                                    <tbody>
                                        {
                                            item.address.map((add, i)=>
                                            <tr key={i}>
                                                <Cols add={add} i={i} />
                                            </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </td>
                        </tr>    
                    )
                }
            </tbody>
        </Table>
    )
}
export default Reuseable;