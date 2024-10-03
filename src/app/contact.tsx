export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950  w-full h-screen">
         <div>
            <h1 className="text-center text-6xl pt-14 text-gray-50">Contact me</h1>
        </div>
        <div className="flex justify-center items-center">
        <div className="h-[500px] w-[60%]">
            <form action="" className="h-full flex justify-center items-center flex-col gap-3">
               
                <input className="w-full p-2 rounded-md" type="text" name="username" placeholder="Shiraz Ali" />
      
                <input className="w-full p-2 rounded-md" type="email" name="useremail" placeholder="shirazkk8@gmail.com"/>
            
               <textarea className="w-3/4 h-1/4 rounded-md" name="message" rows={10} cols={20} placeholder="Enter Your message" required></textarea>
              
                <button className="py-2 px-4 my-3 w-[50%] bg-white text-black rounded-md">
              Submit
            </button>
    
            </form>
        </div>
        </div>
    </section>
  );
}
