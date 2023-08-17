import React from "react";
import CourseReviews from "./CourseReviews";

function CourseCard({course}) {
    
    return (
        <div>
            <h1>{course.title}</h1>   
            <h3>{course.description}</h3>  
            <h4>{course.address}</h4>
            <CourseReviews reviews={course.reviews}/>
        </div>
    )
}

export default CourseCard;