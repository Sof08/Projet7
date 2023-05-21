
import React from 'react';
import emptyStar from '../assets/emptystar.png';
import fullStar from '../assets/fullstar.png';
function RatingCal(props){
    const value = props.value
    const array = [1, 2, 3, 4, 5];
    return (
    <div className="logement-owner_content">
        {array.map((elem) =>
            <img key={elem.toString()} src={value <= elem ? emptyStar : fullStar} alt="star" />
        )}
    </div>
    );

}
export default RatingCal;


 




