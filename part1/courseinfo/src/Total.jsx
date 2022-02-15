
const Total = (props) => {
    
    return(
        <>
          <p>Number of exercises {props.parts.map(part=> part.exercises).reduce((a,b) => a+b, 0)}</p>  
        </>
    );
}

export default Total;