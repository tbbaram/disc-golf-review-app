import React, { useEffect } from 'react';

function CoursesContainer() {
    
    // const [courses, setCourses] = useState([])

        useEffect(() => {
            fetch("http://localhost:3000/discgolfcourses")
            .then(r => r.json())
            .then(data => console.log(data))
        }, [])
    

    return (
        <div>
            <h3>Life is good now</h3>
        </div>
    )
}

export default CoursesContainer;