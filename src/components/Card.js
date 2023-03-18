import { useState} from "react";

function Card({ id, image, info, price, name , removeTour}) {
    const [readMore, setReadMore] = useState(false)

    const description = readMore? info: `${info.substring(0, 200)}...`

    function readMoreHandler() {
        setReadMore(!readMore)
    }

    

    return (
        <div className="Card max-w-[300px] flex flex-col gap-5 border rounded-lg overflow-hidden m-4 max-h-[600px] p-4">
            <img src={image} className="image h-[40%] rounded-lg" alt="placeImgae"></img>

            <div className="tour- info flex flex-col gap-3">
                <div className="tour-details">
                    <h4 className="tour-price text-green-500 font-bold">${price}</h4>
                    <h4 className="tour-name text-[22px] font-bold">{name}</h4>

                </div>

                <div className="description">
                    {description}
                    <span className="read-more text-blue-500 font-semibold cursor-pointer" onClick={readMoreHandler}>
                        {readMore ? `show less` : `read more`}
                    </span>
                </div>
            </div>


            <button className="btn-red border-green-600 border bg-green-300 rounded-lg p-1 m-2" onClick={()=> removeTour(id)}>
                Not Interested
            </button>
        </div>
    )
}

export default Card;