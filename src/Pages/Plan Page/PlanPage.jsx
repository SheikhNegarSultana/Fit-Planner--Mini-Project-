import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaFire } from "react-icons/fa";

const PlanPage = () => {

    const plans = [
            {
              id: 1,
              name: "Free Plan",
              price: 0,
              features: [
                "Access to 5 workouts per week",
                "Basic progress tracking",
                "Community support",
              ],
              buttonText: "Get Started",
              popular: false,
            },
            {
              id: 2,
              name: "Basic Plan",
              price: 19.99,
              features: [
                "Access to all workouts",
                "Advanced progress tracking",
                "Monthly fitness reports",
                "Exclusive content",
              ],
              buttonText: "Subscribe Now",
              popular: true,
            },
            {
              id: 3,
              name: "Premium Plan",
              price: 49.99,
              features: [
                "Access to all workouts",
                "1-on-1 coaching sessions",
                "Personalized diet plans",
                "Weekly progress reports",
                "Exclusive premium content",
              ],
              buttonText: "Join Now",
              popular: false,
            },   
    ]

    return (
        <>

        <NavBar></NavBar>

    <div>
            
        <h1 className=" text-center mt-[2rem] md:mt-[4rem] font-bold text-[1.8rem] md:text-[4rem]">Choose Your Plan</h1>
        <h2 className="text-center mb-[2rem] md:mb-[4rem] font-light md:text-[2rem]">Empower Your Fitness Goals with the Perfect Plan</h2>

        <div className=" md:flex items-center justify-around mb-[8rem] mx-[2rem] md:mx-auto ">
            {
                plans.map( item => (

                <div className=" mb-[2rem] md:mb-0" key={item.id}>

{/* Free Plan */}
                    {
                        item.name === "Free Plan" && 
                        
                        <div className="p-6 rounded-lg shadow-md bg-gray-200 hover:transform hover:rotate-1 hover:shadow-lg transition duration-300">
                        <div className=" flex items-center gap-[0.4rem]">

                {
                    item.popular === true && <FaFire className=" text-[1.8rem]" /> 
                }
                    <h1 className=" mb-[1rem] text-[2rem] font-semibold">{item.name}</h1>
                    </div>
                        
                        {
                        item.features.map( (feature , index) =>(
                            <div className=" flex gap-[0.4rem]" key={index}>
                            <IoMdCheckmarkCircleOutline className=" text-[1.4rem]" />
                            <p >{feature}</p>
                            </div>
                        ))
                    }
                        <h4 className=" mt-[1rem] font-semibold " >Price : {item.price}$</h4>

                        <div className="flex justify-center items-center"> <button className="mt-[1.8rem] p-4 rounded-xl hover:bg-slate-400 bg-white">{item.buttonText}</button> 
                        </div>

                        </div>
                    }

{/* Basic Plan */}
                    {
                        item.name === "Basic Plan" && 
                        
                        <div className="p-6 rounded-lg shadow-md bg-blue-500 text-white hover:transform hover:rotate-1 hover:shadow-lg transition duration-300">

                <div className=" flex items-center gap-[0.4rem] mb-[1rem] ">

                {
                    item.popular === true && <FaFire className=" text-[1.8rem]" /> 
                }
                <h1 className="  text-[2rem] font-semibold">{item.name}</h1>
                </div>
                        
                        {
                        item.features.map( (feature , index) =>(
                            <div className=" flex gap-[0.4rem]" key={index}>
                            <IoMdCheckmarkCircleOutline className=" text-[1.4rem]" />
                            <p >{feature}</p>
                            </div>
                        ))
                    }
                     <h4 className=" mt-[1rem] font-semibold " >Price : {item.price}$</h4>

                     <div className="flex justify-center items-center"> 
                     
                     <button className="mt-[1.8rem] p-4 rounded-xl hover:bg-sky-700 bg-sky-800 ">{item.buttonText}
                     
                    </button> 
                    </div>



                        </div>
                    }

{/* Premium Plan */}
                    {
                        item.name === "Premium Plan" && 
                        
                        <div className="p-6 rounded-lg shadow-md bg-pink-400 text-white hover:transform hover:rotate-1 hover:shadow-lg transition duration-300">
                        <div className=" flex items-center gap-[0.4rem]">

                {
                    item.popular === true && <FaFire className=" text-[1.8rem]" /> 
                }
                    <h1 className=" mb-[1rem]  text-[2rem] font-semibold">{item.name}</h1>
                    </div>
                        
                        {
                        item.features.map( (feature , index) =>(
                            <div className=" flex gap-[0.4rem]" key={index}>
                            <IoMdCheckmarkCircleOutline className=" text-[1.4rem]" />
                            <p >{feature}</p>
                            </div>
                        ))
                    }
                    <h4 className=" mt-[1rem] font-semibold " >Price : {item.price}$</h4>

<div className="flex justify-center items-center"> 

<button className="mt-[1.8rem] p-4 rounded-xl hover:bg-pink-800 bg-pink-500">{item.buttonText}

</button> 
</div>


                        </div>
                    }
                   

                    </div>
                ))
            }
        </div>



    </div>

        <Footer></Footer>
        </>
    );
};

export default PlanPage;