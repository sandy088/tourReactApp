import Card from "./Card";


function Tours({tours, removeTour}){
  return(
    <div>

       
        {/* Heading */}
        <div className="flex justify-center items-center m-5 ">
            <h2 className=" text-[30px] font-bold px-7 py-5  rounded-xl border-[3px] border-emerald-500 border-dashed">Plan with Love</h2>
        </div>
        

        {/* Cards */}

        <div className="flex flex-wrap max-w-[1000px] mx-auto">
            {
                tours.map((tour) => {
                    return <Card {...tour} removeTour={removeTour}></Card>
                })
            }
        </div>


    </div>
  )
}

export default Tours;
