
const ShimmerMenu =()=>{
    return(
        <>
        <div>
            
        </div>
        <div>
            <div className="w-full  h-96 rounded-sm  bg-gray-300 float-left "> 
                <div className="ml-[500px] bg-black mt-24  w-72 h-12absolute "> hey</div>
                <div className="w-80 h-52    ml-20 absolute  rounded-sm bg-black"></div>
             </div>
            {Array(15).fill("Hey").map((e,index)=>(
                <>
                
                <div key={index} className=" w-[1200] h-60 rounded-sm ml-20  mt-44 bg-gray-300 float-left"></div>
                </>
            ))}
        </div>
        </>
    )
}


export default ShimmerMenu;