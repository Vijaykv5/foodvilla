const Shimmer = () => {
    return (

      <div className="body-cards">
       {Array(10).fill("").map((e,index)=>(<div key={index}className="shimmer-cards"></div>))}
       {/* {Array(10).fill("").map((e,index)=>(<div key={index}className="photo"></div>))}
       {/* {Array(10).fill("").map((e,index)=>(<div key={index}className="name"></div>))}
       {Array(10).fill("").map((e,index)=>(<div key={index}className="special"></div>))}
       {Array(10).fill("").map((e,index)=>(<div key={index}className="rating"></div>))}
 */} 

      </div>
      
    
    );
  };
  
 

export default Shimmer;