import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';

const HomePage = () => {
    const slider = (
        <AwesomeSlider className='h-[32rem]'>
            <div data-src="https://i.ibb.co.com/HPzQYgX/pexels-823sl-2294361.jpg">
                <div className="absolute bottom-5 left-5 bg-black bg-opacity-60 text-white p-4 rounded-lg w-[80%] md:w-auto ">
                    <h2 id='roboto-slab' className="text-xl font-semibold mb-[0.78rem] md:mb-[1rem] ">Stay Consistent</h2>
                    <p id='roboto-slab' className="text-sm">Consistency is key to achieving your fitness goals. Make a schedule and stick to it!</p>
                </div>
            </div>
            
            <div data-src="https://i.ibb.co.com/7YhLhXX/pexels-ivan-samkov-4164512.jpg">
                <div className="absolute bottom-5 left-5 bg-black bg-opacity-60 text-white p-4 rounded-lg">
                    <h2 id='roboto-slab' className=" text-xl font-semibold mb-[0.78rem] md:mb-[1rem]">Hydrate Properly</h2>
                    <p id='roboto-slab'  className=" text-sm">Keep your body hydrated by drinking enough water throughout the day, especially during workouts.</p>
                </div>
            </div>
            <div data-src="https://i.ibb.co.com/YbHNLVQ/pexels-jenna-hamra-248942-1305063.jpg">
                <div className="absolute bottom-5 left-5 bg-black bg-opacity-60 text-white p-4 rounded-lg">
                    <h2 id='roboto-slab' className="text-xl font-semibold mb-[0.78rem] md:mb-[1rem]">Balanced Diet</h2>
                    <p id='roboto-slab' className="text-sm ">Fuel your body with a balanced diet rich in vitamins, proteins, and healthy fats to maximize your performance.</p>
                </div>
            </div>
        </AwesomeSlider>
    );

    const routine = [
        
        {
            "id": 1,
            "title": "Morning Yoga",
            "description": "A gentle sequence to kickstart your day with energy.",
            "image": "https://i.ibb.co.com/h1jxj7T/pexels-mart-production-7880156.jpg",
            "duration": "30 minutes",
            "level": "Beginner"
          },
          {
            "id": 2,
            "title": "Cardio Blast",
            "description": "High-intensity cardio exercises to burn calories fast.",
            "image": "https://i.ibb.co.com/dBFMmCM/pexels-willpicturethis-1954524.jpg",
            "duration": "45 minutes",
            "level": "Intermediate"
          },
          {
            "id": 3,
            "title": "Strength Training",
            "description": "Build muscle and strength with focused weight training.",
            "image": "https://i.ibb.co.com/c6cTDn9/pexels-victorfreitas-791763.jpg",
            "duration": "60 minutes",
            "level": "Advanced"
          }
          
          
    ]


    return (
        
        <div className=' bg-[#F8F9FA]'>
        <NavBar></NavBar>

            {slider}

            <div className=' mx-[2rem] md:mx-[4rem]'>
                <h1 className=' text-center font-bold text-4xl  md:text-6xl mt-[8rem]'>Get Fit, Stay Strong</h1>

            <div className=' md:grid md:grid-cols-3 mt-[4rem] gap-[2rem] mb-[6rem]'>
                {
                    routine.map((item, index) => (

                        <div key={index} className=' mb-[2rem] md:mb-auto flex flex-col  border p-8 rounded-lg transition-transform transform hover:scale-105 hover:border-4 hover: border-cyan-900 hover:shadow-lg hover:shadow-cyan-800 '>
                        <h2 className="roboto-slab text-2xl font-bold text-center text-black">{item.title}</h2>
                        <img src={item.image} alt={item.title} className=" mt-[1rem] w-full 
                        " />
                        <p className="roboto-slab font-semibold mt-6 ">{item.description}</p>
                        <p className='mt-4 font-semibold '> Duration : <span className=' font-normal'>{item.duration}</span></p>
                        <p className='font-semibold '> Level : <span className=' font-normal'>{item.level}</span></p>
                        

                        </div>
                    ))
                }
            </div>

            </div>

        <Footer></Footer>
        </div>
    );
};

export default HomePage;
