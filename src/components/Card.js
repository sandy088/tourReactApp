import { useState } from "react";

function Card({ id, image, info, price, name }) {
    const [readMore, setReadMore] = useState(false)

    const description = `${info.substring(0, 200)}...`

    function readMoreHandler() {
        setReadMore(!readMore)
    }

    return (
        <div className="Card">
            <img src={image} className="image" alt="placeImgae"></img>

            <div className="tour- info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>

                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readMore ? `show less` : `read more`}
                    </span>
                </div>
            </div>


            <button>
                Not Interested
            </button>
        </div>
    )
}

export default Card();