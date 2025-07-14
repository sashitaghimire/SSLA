import image_1 from '../../../assets/gallery/1.png';
import image_2 from '../../../assets/gallery/2.png';
import image_3 from '../../../assets/gallery/3.png';
import image_4 from '../../../assets/gallery/4.png';
import image_5 from '../../../assets/gallery/5.png';
import image_6 from '../../../assets/gallery/6.png';

const gallery_image = [{
   id: 1,
  image: image_1,
 
},
{
  id: 2,
  image: image_2,
},
{
  id: 3,
  image: image_3,
},
{
  id: 4,
  image: image_4,
},
{
  id: 5,
  image: image_5,
  },
  {
    id: 6,
    image: image_6,
  },
  
]
export const Gallery = () => {
  return (
    <div className='bg-[#FF976317] py-12 md:px-16'>
       <div className="mb-3 sm:mb-4 md:mb-6 mx-auto pl-[6rem]">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold text-orange-600 inline-block relative leading-tight">
            Gallery
          <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-10 sm:w-12 md:w-16 lg:w-20 h-[2px] sm:h-[3px] bg-orange-500"></span>
                  <span className="absolute -bottom-1 sm:-bottom-2 left-12 sm:left-16 md:left-20 lg:left-24 w-2 sm:w-3 md:w-4 lg:w-6 h-[2px] sm:h-[3px] bg-orange-500"></span>
                  </h2>
          </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto'>
        {gallery_image.map((image) => (
          <div key={image.id} className='flex flex-col items-center justify-center'>
            <img src={image.image} alt={image.id} className='w-full h-auto object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300' />
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center mt-8'>
        <button className='bg-orange-600 text-white py-2 px-6 rounded-md hover:bg-orange-700 transition-colors duration-300'>More</button>
      </div>
    </div>
  )
}

