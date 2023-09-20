import topImage from '@/public/images/img_illustration.png'
import Image from 'next/image'
export default () => {
  return (
    <main>

      {/* // FIRST  SECTION */}
      <section className="w-full h-fit px-4 sm:px-32">
        <div className="w-full h-full grid grid-cols-7 gap-12 max-[950px]:grid-cols-1">
          <div className='flex items-center justify-center flex-col col-span-4 h-full'>
            <div className="max-w-2xl w-full">
              <h1 className="text-6xl text-[#301e08] leading-snug font-bold font-sans max-[1360px]:text-5xl max-[1160px]:text-4xl max-[400px]:text-2xl">The Best Restaurant <br /> In <span className='text-primary'> Town </span> </h1>
              <p className='text-xl font-poppins font-medium leading-10'>We provide best food in town, we provide home delivery and dine in services.</p>
            </div>
            <div className='max-w-2xl w-full flex gap-4 justify-start mt-10 max-[400px]:flex-wrap '>
              <button className='w-48 max-[400px]:w-full h-16 rounded-2xl bg-primary font-poppins font-semibold text-white'>Order Now</button>
              <button className='w-48 max-[400px]:w-full h-16 rounded-2xl bg-[#F9E1E1] font-poppins font-semibold text-primary border border-primary'>Reservation</button>
            </div>
          </div>
          <div className="pb-[75%] col-span-3 relative">
            <Image className='w-full h-full absolute' src={topImage} alt="" />
          </div>
        </div>
      </section>

      {/* SECOND  SECTION */}


    </main>
  )
}