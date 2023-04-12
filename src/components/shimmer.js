const Shimmer = () => {
    return (

      <div className="body-cards bg-black flex flex-wrap w-56 h-28 mt-40 ml-5 ">
       {Array(10).fill("").map((e,index)=>(<div key={index} className="shimmer-cards align-bottom  "></div>))}
       
       {/* mt-40  h-12 w-72 flex flex-wrap ml-5 */}
      {/* { w-72 bg-slate-300 p-5 ml-8  flex flex-wrap} */}

      </div>
      
    
    );
  };
  
 

export default Shimmer;