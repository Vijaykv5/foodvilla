
const ShimmerMenu =()=>{
    return(
        <>
        <div>
            
        </div>
        <div>
            <div className="w-full  h-96 rounded-sm  bg-gray-200 float-left "> 
                {/* <div className="ml-[500px] bg-gray-300 mt-24  w-72 h-12absolute "> </div>
                <div className="w-80 h-52    ml-20 absolute  rounded-sm bg-gray-300"></div> */}
             </div>
            {Array(15).fill("").map((e,index)=>(
                <>
                
                <div key={index} className=" w-[850] h-32 rounded-md ml-64  mt-6 bg-gray-200 float-left"></div>
                </>
            ))}
        </div>
        </>
    )
}


export default ShimmerMenu;