import bannerMobile from "../assets/images/image-hero-desktop.png";
import bannerDesktop from "../assets/images/image-hero-desktop.png"
import meet from "../assets/images/client-meet.svg";
import audio from "../assets/images/client-audiophile.svg";
import eda from "../assets/images/client-databiz.svg";
import maker from "../assets/images/client-maker.svg";

const Hero = () => {
  return (
    <div className="max-w-[1246px] w-full mx-auto py-16 px-8">
        <div className="flex flex-col-reverse justify-center lg:flex-row justify-between">
            <div className="flex flex-col space-y-6 lg:mt-10">
                <p className="font-bold text-4xl lg:text-start lg:w-3/4 text-6xl text-center">Make Remote Work</p>    
                <p className="text-gray-600 text-center lg:w-3/4 lg:text-start">Features Company Careers About Login Register Make remote work Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button className="mt-4 bg-black text-white w-[200px] mx-auto rounded-xl py-3 lg:mx-2 hover:bg-white hover:text-black">Learn More</button>
                <div className="flex flex-row py-16 space-x-3">
                    <img className="h-6" src={eda} alt="" />
                    <img className="h-6" src={audio} alt="" />
                    <img className="h-6" src={meet} alt="" />
                    <img className="h-6" src={maker} alt="" />

                </div>
            </div>
            <div className="pb-10 lg:pb-0">
                <img className="block h-90 lg:hidden"  src={bannerMobile} alt="banner" />
                <img className="hidden lg:block h-[500px] w-[800px]" src={bannerDesktop} alt="banner" />

            </div>
        </div>
    </div>
  )
}

export default Hero;