import { Star } from "lucide-react";
import user_cover_1 from "../../../assets/testimonial1.png";
import user_cover_2 from "../../../assets/testimonial2.png";

const testimonials = [
    {
      id: 1,
      avatar: user_cover_1,
      name: "Regina Miles",
      role: "Designer",
      text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
      rating: 4,
      hasBorder: true
    },
    {
      id: 2,
      avatar: user_cover_2,
      name: "Regina Miles",
      role: "Designer",
      text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
      rating: 4,
      hasBorder: false
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

export const Testimonials = () => {
  return (
    <div className='bg-[#FF976317] py-12 md:px-16'>
       <div className="mb-3 sm:mb-4 md:mb-6 mx-auto pl-[6rem]">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-orange-600 inline-block relative leading-tigh pb-3">
            Testimonials
              </h2>
              <p className='text-4xl text-orange-600 pb-3'>Video in Live Action</p>
              <p className='text-xl text-orange-600'>Problems trying to resolve the conflict between the two </p>
              <p className='text-xl text-orange-600 pb-3'>major realms of Classical physics: Newtonian mechanics </p>
          </div>
         
           
      <div className="max-w-6xl mx-auto relative">
        {/* Dotted border container */}
       
          
          {/* Cards container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg relative
                  border border-gray-200">
                  
                  {/* Avatar */}
                  <div className="flex justify-center mb-6">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                    />
                  </div>

                  {/* Testimonial text */}
                  <div className="text-center mb-6">
                    <p className="text-gray-600 leading-relaxed text-base">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Star rating */}
                  <div className="flex justify-center mb-6 space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Name and role */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          
        </div>
      </div>
   
    
    
  )
}

