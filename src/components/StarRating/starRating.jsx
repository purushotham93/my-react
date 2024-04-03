import { useState } from 'react'
import {FaStar} from 'react-icons/fa';
import './style.css'
export default function StarRating({noOfStars=5}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function onClick(index) {
        setRating(index)
        
    }
    function onMouseEnter (index) {
        setHover(index)

    }
    function onMouseLeave() {
        setHover(rating)
    }
    return (        
            <div class="star-rating">
                {rating} - {hover}
                {
                    [...Array(noOfStars)].map((star, index) => {
                        index+=1;
                        return <FaStar
                        className={index <= (hover || rating) ? 'active' : 'in-active' }
                        key={index}
                        onClick={() => onClick(index)}
                        onMouseEnter={() => onMouseEnter(index)}
                        onMouseLeave={() => onMouseLeave()}
                        size={40}
                        ></FaStar>
                    })
            }
            </div>
        
    )
}