const Shimmer = () => {
    return (

      <div className="body-cards flex flex-wrap justify-center">
       {Array(15).fill("").map((e,index)=>(
        <>
       <div key={index} className="shimmer-cards w-60 h-60 rounded-sm ml-20  mt-44 bg-gray-300 float-left">
        </div>
        </>))}
       
       

      </div>
      
    
    );
  };
  
 

export default Shimmer;