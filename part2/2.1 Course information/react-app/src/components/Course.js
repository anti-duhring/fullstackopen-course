import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({course}) => {
    return ( 
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total sum={course.parts.map((part, index) => part.exercises).reduce((accumulator, value) => accumulator + value, 0)} />
        </>
     );
}
 
export default Course;