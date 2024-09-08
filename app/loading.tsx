import React from "react";

const Loading = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="loader" />
      {/* <div className="grid grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item}>
            <p>Loading...</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Loading;
