import Navbar from "./components/section1/Navbar";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import "./index.css";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D",
      color: "blue",
      tag: "Satisfied",
      intro: "Feeling accomplished and fully satisfied with the outcome.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      color: "green",
      tag: "UnderServed",
      intro: "",
    },
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      color: "pink",
      tag: "UnderBanked",
      intro: "",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661576523483-3f0bfc9a3fdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMGd1eXN8ZW58MHx8MHx8fDA%3D",
      color: "yellow",
      tag: "UnderBaked",
      intro: "",
    },
    {
      img: "https://images.unsplash.com/photo-1647864019646-e446b0135941?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdvcmtpbmclMjBndXlzfGVufDB8fDB8fHww",
      color: "orange",
      tag: "UnderWare",
      intro: "",
    },
  ];

  return (
    <>
      <div className='bg-white rounded-md'>
        <Navbar />
        <Section1 users={users} />
      </div>
      <div>
        <Section2 />
      </div>
    </>
  );
};

export default App;
