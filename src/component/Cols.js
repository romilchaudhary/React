
//React Fragment Example
function Cols(props)
{
    return(
        <>        
            <td>
                {props.add.Hn}
            </td>
            <td>
                {props.add.city}
            </td>
            <td>
                {props.add.country}
            </td>
        </>
    )
}
export default Cols;