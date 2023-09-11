import { useState } from "react";

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
function App() {
  // const [counter, setCounter] = useState(1);

  // const handleIncrease = () => {
  //   setCounter(counter + 1);
  // };
  // const handleDecrease = () => {
  //   setCounter(counter - 1);
  // };
  // const [gift, setGift] = useState("");

  // const randomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length);
  //   setGift(gifts[index]);
  // };
  // const [name, setName] = useState("");

  // const [checked, setChecked] = useState([]);

  // const handleSubmit = () => {};

  // const handleCheck = (id) => {
  //   setChecked((pre) => {
  //     const isChecked = checked.includes(id);
  //     if (isChecked) {
  //       return checked.filter((item) => item !== id);
  //     } else {
  //       return [...pre, id];
  //     }
  //   });
  // };

  const storangeJobs = JSON.parse(localStorage.getItem("jobs"));

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(storangeJobs ?? []);

  const handleSubmit = () => {
    setJobs((pre) => {
      const newJobs = [...pre, job];

      //save to local Storange
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("job", jsonJobs);

      return newJobs;
    });
    setJob("");
  };

  return (
    // <div className="App">
    //   <div style={{ padding: 32 }}>
    //     {/* useState */}
    //     {/* <div className="container">
    //     <h1>{counter}</h1>
    //     <button onClick={handleIncrease}>inCrease</button>
    //     <button onClick={handleDecrease}>deCrease</button>
    //   </div> */}

    //     {/* <div style={{ padding: 32 }}>
    //     <h1>{gift || "chưa có phần thưởng"}</h1>
    //     <button onClick={randomGift}>Lấy thưởng</button>
    //   </div> */}

    //     {/* <input onChange={(e) => setName(e.target.value)} />
    //     <button onClick={() => setName("nguyee van b")}>change</button> */}

    //     {courses.map((course) => (
    //       <div key={course.id}>
    //         <input
    //           type="checkbox"
    //           checked={checked.includes(course.id)}
    //           onChange={() => handleCheck(course.id)}
    //         />
    //         {course.name}
    //       </div>
    //     ))}

    //     <button onClick={handleSubmit}>Submit</button>
    //   </div>
    // </div>
    <div style={{ padding: 32 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
