const Shimmer = () => {
    return (
        <div className="shimmer-container flex flex-wrap justify-center gap-4 w-full h-full">
            {Array(14).fill("").map((_, index) => (
                <div key={index} className="shimmer-card m-4 p-4 h-[420px] w-[300px] text-center rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col items-center">
                    <div className="shimmer-img h-44 w-full bg-gray-200 rounded-lg mb-4"></div>
                    <div className="shimmer-line h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
                    <div className="shimmer-line h-6 w-1/2 bg-gray-200 rounded mb-2"></div>
                    <div className="shimmer-line h-6 w-1/4 bg-gray-200 rounded mb-2"></div>
                    <div className="shimmer-line h-6 w-1/2 bg-gray-200 rounded mb-2"></div>
                </div>
            ))}
        </div>
    );
}

export default Shimmer;
