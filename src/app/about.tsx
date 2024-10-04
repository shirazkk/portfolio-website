export default function About(){
    return(
        <section id="about" className="bg-slate-950 h-screen">
        <div className="h-screen flex justify-center items-center gap-6">
        {/* left-section-img */}
          <div className="w-1/4">
            <img className="w-[400px] object-center  rounded-full"  src="assist/profile.jpeg" alt="" />
          </div>
          {/* right-section */}
          <div className="w-2/4 flex justify-center items-center ">
          <div className="h-4/5 relative m-5">
            <a href="#" className="font-extrabold text-5xl">
              <h1 className="text-gray-50">About <span className="text-blue-700 ">Me</span></h1>
            </a>
            <p className="py-3 font-semibold text-gray-50"> 
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
              repudiandae, consectetur dolorum veritatis ad aspernatur minima
              asperiores obcaecati amet possimus quisquam similique Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sunt, mollitia! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae
              quidem officia vero debitis! Quidem reiciendis vero, neque corporis
              natus molestias necessitatibus officia sint magni vel architecto
              earum impedit quisquam?
            </p>
            <a href="" className="py-2 px-4 my-3 font-bold bg-white  text-black rounded-md">Read More</a>
          </div>
          </div>
  
        </div>
      </section>
    )
}