import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { Tooltip,Legend,  AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer   } from 'recharts';

const ProgressPage = () => {

    const Progress =[
      { "day": "Monday", "hours": 1.8, "calories": 320, "daysActive": 1 },
      { "day": "Tuesday", "hours": 2.5, "calories": 450, "daysActive": 1 },
      { "day": "Wednesday", "hours": 1.2, "calories": 270, "daysActive": 1 },
      { "day": "Thursday", "hours": 2, "calories": 400, "daysActive": 1 },
      { "day": "Friday", "hours": 3, "calories": 600, "daysActive": 1 },
      { "day": "Saturday", "hours": 0.8, "calories": 150, "daysActive": 1 },
      { "day": "Sunday", "hours": 1.5, "calories": 350, "daysActive": 1 }
    ]
    

    return (
        <>
           <NavBar></NavBar>

<div className=" mt-[4rem] text-center text-3xl font-semibold bg-gradient-to-r from-cyan-600  to-cyan-800 text-transparent bg-clip-text">
  Weekly Fitness Progress
</div>
<div className="h-1 bg-gradient-to-r from-cyan-600  to-cyan-800 mt-2 mb-[4rem]"></div>

<div className=" w-full max-w-4xl mx-auto mb-[4rem] md:mb-[8rem]">
  <ResponsiveContainer width="100%" height={400}>
    <AreaChart
      width={500}
      height={400}
      data={Progress}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="hours" stroke="#FFB6C1" fill="#FFB6C1"/>
      <Area type="monotone" dataKey="calories" stroke="#AEC6CF" fill=" #AEC6CF" />
      <Area type="monotone" dataKey="daysActive" stroke="#FFD700" fill="#FFD700" />
    </AreaChart>
  </ResponsiveContainer>
</div>


           <Footer></Footer> 
        </>
    );
};

export default ProgressPage;