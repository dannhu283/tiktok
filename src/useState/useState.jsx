import React, { useState } from "react";

export default function useState() {
  // const gifts = ["cpi i9", "ram 32gb rgb", "rbg keyboard"];

  const courses = [
    {
      id: 1,
      name: " HTML,CSS",
    },
    {
      id: 2,
      name: "JS",
    },
    {
      id: 3,
      name: " ReactJs",
    },
  ];
  return (
    <div>
      <h1>useState</h1>
      <div style={{ padding: 32 }}>
        {/* useState */}
        {/* <div className="container">
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>inCrease</button>
        <button onClick={handleDecrease}>deCrease</button>
      </div> */}

        {/* <div style={{ padding: 32 }}>
        <h1>{gift || "chưa có phần thưởng"}</h1>
        <button onClick={randomGift}>Lấy thưởng</button>
      </div> */}

        {/* <input onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setName("nguyee van b")}>change</button> */}

        {courses.map((course) => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}
          </div>
        ))}

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
