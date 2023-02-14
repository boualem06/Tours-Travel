import heroImg from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/tour-img01.jpg'
import herovideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../components/SearchBar'
const Home = () => {
    return (
        <div>

        
        <div className='flex-rows  md:flex items-center justify-between  gap-4 px-4 pt-20'>
            <div className='block md:hidden mb-8 w-full flex items-center justify-center'>
                <img style={{ objectFit:"cover" }} src={heroImg} alt='' className='rounded-lg border-2 border-[#faa935] w-full h-full'></img>
            </div>

            {/* ************************the partie left of the images and the videos ***************** */}

            <div className='text-lg font-md mt-1 mb-2 text-[#0b2727]'>
                < div className='flex items-center'>
                    <Subtitle subtitle={"Know Before you go  "}></Subtitle>
                    <img style={{ width: "2.3rem", height: "2.3rem" }} src={worldImg} alt=''></img>
                </div>
                <h1 className='text-3xl font-bold'>
                    Traveling open the door to creating <span className='text-[#faa935]'>memories</span>
                </h1>
                <p className='mt-4'>
                    lorem osjdfsl mlqsjdh fnviouze fhlkdsfj sdlfn nav_linkssjodif jsodifj osdfnlsdkfjsoid falselskdjf sdlfjksldkfjsdf<br></br>
                    oisdf sodif oi jsdofiso dijfosldkfjmiosdjf joizejfskld fniou uzoeifj  mlkdjfozie fksjdhf qskjdhq ksd kqjshdqskdjh iqusdh<br></br>
                    oisdf sodif oi jsdofiso dijfosldkfjmiosdjf joizejfskld fniou uzoeifj  mlkdjfozie fksjdhf qskjdhq ksd kqjshdqskdjh iqusdh
                </p>
            </div>
        {/* ************************the partie of the images and the videos ***************** */}
        <div className='grid grid-cols-3 gap-4'>
            <div className='hidden md:block'>
                <img style={{ objectFit:"cover" }} src={heroImg} alt='' className='rounded-lg border-2 border-[#faa935] h-[300px] lg:h-[400px] lg:w-[300px] '></img>
            </div>
            <div className='hidden mt-10 md:block'>
                <video style={{ objectFit:"cover" }} src={herovideo} controls className='rounded-lg border-2 border-[#faa935] h-[300px] lg:h-[400px] lg:w-[300px]'></video>
            </div>
            <div className='hidden mt-20 md:block'>
                <img style={{ objectFit:"cover" }} src={heroImg2} alt='' className='rounded-lg border-2 border-[#faa935] h-[300px] lg:h-[400px] lg:w-[300px]'></img>
            </div>
        </div>
        </div>

        
        {/* ************************the SearchBar ***************** */}
        <SearchBar></SearchBar>
        </div>



       
    )
}

export default Home