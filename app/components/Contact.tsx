export default function Contact(){
    return(
        
        <div id="contact" className= "bg-slate-200 w-full h-auto pb-4 border-gray-400 border-t-2">
            <h2 className="font-bold text-3xl text-center text-black  w-full h-20 pt-10">Contact Me</h2>
             
              <div className="h-auto w-full">

               <form className=" mt-10 flex gap-5 justify-center items-center flex-col">
                <input type="text" placeholder="Name" className="p-2 rounded-md w-96 border border-slate-800" required />
                <input type="email" placeholder="Email" className="p-2 rounded-md w-96 border border-slate-800" required />
                <input type="text" placeholder="Subject" className="p-2 rounded-md w-96 border border-slate-800" required />
                <textarea  rows={6} placeholder="Message" className="p-2 rounded-md w-96 border border-slate-800" required></textarea>

                <div>
                    <button type="submit" className=" py-4 mt-4  px-8 rounded-lg bg-blue-800 text-white">Send Message</button>
                </div>
                </form>
              </div>
            

        </div>
    )
};