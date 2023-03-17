import Card from "./Card";

function Tours({tours}){
  return(
    <div>

        {/* Heading */}
        <div>
            <h2>Plan with Love</h2>
        </div>
        

        {/* Cards */}

        <div>
            {
                tours.map((tour) => {
                    return <Card {...tour}></Card>
                })
            }
        </div>


    </div>
  )
}

export default Tours;
