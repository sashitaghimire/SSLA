import about_us_bg from '../../assets/background/about_us_bg.png'
import { AboutUs } from '../../Home/components/AboutUs'
import React from 'react';
import { GraduationCap, Award, DollarSign, Volume2,  } from 'lucide-react';

// Reusable Card Component
const RuleCard = ({ icon, title, bgColor = "bg-blue-50" }) => {
  return (
    <div className="group">
      <div className="relative">
        {/* Main Card Container with Custom Border */}
        <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full overflow-hidden">
          {/* Custom Orange Border */}
          <div className="absolute inset-0 bg-orange-400 rounded-3xl"></div>
          
          {/* Inner White Content */}
          <div className="relative bg-white m-3 rounded-1xl p-6 h-full">
            {/* Icon Container */}
            <div className={`${bgColor} rounded-2xl p-6 mb-4 flex justify-center items-center`}>
              <div className="text-orange-500">
                {icon}
              </div>
            </div>
            
            {/* Title */}
            
          </div>
          
          
      
        </div>
        <h3 className="text-lg font-bold text-orange-500 text-center leading-tight mt-5">
              {title}
            </h3>
      </div>
    </div>
  );
};
// Reusable Section Header Component
const SectionHeader = ({ title, showDecorator = true }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-4">{title}</h1>
      {showDecorator && (
        <div className="flex justify-center items-center space-x-2">
          <div className="h-1 w-20 bg-orange-500"></div>
          <div className="h-1 w-16 bg-orange-500"></div>
          <div className="h-1 w-12 bg-orange-500"></div>
        </div>
      )}
    </div>
  );
};



// Reusable Text Content Component
const TextContent = ({ paragraphs }) => {
  return (
    <div className="space-y-6 text-gray-700 leading-relaxed text-md">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

// Main Rules and Regulations Component
export const       AboutUsPage = () => {
  const cardData = [
    {
      icon: <GraduationCap className="w-16 h-16" />,
      title: "Gurmukhi (levels 1 to V)",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Award className="w-16 h-16" />,
      title: "Sikh Theology",
      bgColor: "bg-blue-50"
    },
    {
      icon: <DollarSign className="w-16 h-16" />,
      title: "Sikh History",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Volume2 className="w-16 h-16" />,
      title: "Gurbani reading practice with emphasis on proper pronunciation",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Volume2 className="w-16 h-16" />,
      title: "Gurbani reading practice with emphasis on proper pronunciation",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Volume2 className="w-16 h-16" />,
      title: "Tabla",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Volume2 className="w-16 h-16" />,
      title: "English as a Second Language",
      bgColor: "bg-blue-50"
    },
    
    
    

  ];

  const textParagraphs = [
    "The School started in on August 9, 1997. We have nine class-rooms and two state of the art computer labs. Student ages range from 5 years t o 16 years. For students over age 16, the are beginning, intermediate, and advanced level of Sikh theol-ogyandhistory classes. Keeping in mind the learning style of students in the west, we have designed our own instructional materials. Never satis- fied with our status quo, we are continually improving our in- structional programs.",
    "We have twelve class rooms. The students are categorized according to their age and knowledge of Gurmukhi. Student ages range from four (4) years to eighteen (18). There are also classes for adults over age 18. Each student is given opportunity to participate in a variety of activities for personal growth and development.",
    "Classes are held every Sunday from 9:30 a.m. to 12:30 p.m. Gurmat Sangeet and tabla classes are from 11:30 a.m. to 2:30 p.m. ",
    "For more information please contact.",
    "Gurdip Singh Malik - 213.923.4975",
    "Joginder Singh Sidhu - 818.266.4757"
  ];

  return (
    <>
    <div className="flex-1 relative overflow-hidden">
          
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${about_us_bg})`}}>
            </div>
            
           
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            
           
            <div className="relative z-10 flex items-center justify-center min-h-screen px-8 pl-12 lg:ml-[40rem]">
                <div className="text-center max-w-4xl">
                   
                    {/* <h1 className="text-5xl md:text-5xl font-bold mb-8 leading-tight">
                        <span className="text-orange-500">Take student experience to the next level</span>
                      
                       
                    </h1> */}
                    
                    
                    {/* <div className="mt-12">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Read More
                        </button>
                    </div> */}
                </div>
            </div>
            </div>
    
   
      
       <div className="my-12">
          <AboutUs fromAboutUsPage={true}/>
        </div>
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <SectionHeader title="Courses Offered" />

        {/* Cards Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cardData.map((card, index) => (
            <RuleCard
              key={index}
              icon={card.icon}
              title={card.title}
              bgColor={card.bgColor}
            />
          ))}
        </div> 
          

        

        {/* Description Text */}
        <div className="max-w-5xl mx-auto">
            <TextContent paragraphs={textParagraphs} />
            
        </div>
      </div>
    </div>
        </>
  )
}

