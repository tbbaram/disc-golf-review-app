import React from 'react'

function CourseReviews({reviews}) {
    
    const getReviews = reviews.map(review => {
        return (
            <div>
               <p>{review.rating}</p>
               <p>{review.comment}</p> 
            </div>
        )
    })
    
  return (
    <div>
        {getReviews}
    </div>
  )
}

export default CourseReviews;

