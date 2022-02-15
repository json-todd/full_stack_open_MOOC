import Part from "./Part";


const Content = (props) => {
    var {part, exercises} = props;
    console.log(part);
    return(
        <>
            <Part part={part[0]} exercises={exercises[0]} />
            <Part part={part[1]} exercises={exercises[1]} />
            <Part part={part[2]} exercises={exercises[2]} />
        </>
    );
}

export default Content;