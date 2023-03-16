const Shimmer = () => {
    return (
      <div className="flex flex-wrap justify-center" data-testid="shimmer">
        {Array(12)
          .fill("")
          .map((shim, index) => {
            return (
              <div
                key={index}
                className="w-64 h-80 hover:shadow-xl p-5 hover:border m-3 bg-gray-200"
              ></div>
            );
          })}
      </div>
    );
  };
  
 

export default Shimmer;