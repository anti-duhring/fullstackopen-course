const Total = (props) => {
    return ( 
        <>
            <p>Number of exercises {props.parts.map((part, index) => part.exercises).reduce((accumulator, value) => accumulator + value, 0)}</p>
        </>
     );
}
 
export default Total;