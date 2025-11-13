export default function Hero() {
  return (
    <section className="relative h-[600px] lg:h-[800px] flex items-center justify-center overflow-hidden bg-black">
      {/* Video Overlay */}
      <div className="absolute inset-0 z-0 opacity-60">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="https://vision-texas.com/wp-content/uploads/2021/07/Future-12917.mp4"
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-lg">
          One Vision for <br />
          <span className="text-blue-400">Integrated Solutions</span>
        </h1>
        <div className="mt-8 flex justify-center">
           <img 
             src="https://vision-texas.com/wp-content/uploads/2021/12/Vision_Logo_Ani_300.gif" 
             alt="Vision Animated Logo"
             width={300}
             height={80}
             className="max-w-full h-auto"
           />
        </div>
      </div>
    </section>
  );
}