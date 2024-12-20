import Image from "next/image"
export default function Hero(){
    return(
        <main className="flex justify-between items-center bg-slate-200 h-screen pb-10 px-12 w-full">
            <div className="w-full h-96 md:w-1/2 flex flex-col items-center justify-center text-center  ">
                <h2 className="text-5xl font-bold">Hello <br/>I AM Malaika</h2>
                <p className="mt-5 text-justify px-4 ">I am a passionate Front-End Development student currently working on various projects to enhance my skills and knowledge. I am constantly learning and experimenting with new technologies and techniques. I enjoy transforming ideas into functional designs and am excited to continue growing in this field..</p>
                
            </div> 
            <div className="w-1/2 md:block hidden px-10">
                <Image src="/img1.webp" alt="" className="w-96 h-96 rounded-md shadow-xl " width={200} height={200}/>
            </div>
        </main>
    )
}