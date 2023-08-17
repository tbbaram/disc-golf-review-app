import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';

function CoursesContainer() {
    
    const [courses, setCourses] = useState([])


        useEffect(() => {
            fetch("http://localhost:3000/discgolfcourses")
            .then(r => r.json())
            .then(data => setCourses(data))
        }, [])
    
        const courseCards = courses.map(course => <CourseCard course={course} key={course.title}/>)


    return (
        <div>
            {courseCards}
        </div>
        )
    }

export default CoursesContainer;