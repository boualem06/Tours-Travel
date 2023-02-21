import logo from '../assets/images/logo.png'
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import LocationOn from '@material-ui/icons/LocationOn';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
// Facebook  Instagram  GitHub LinkedIn Email Phone
const Footer = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:px-32 md:px-20 px-10  py-10 bg-gray-100">
            <div>
                <img style={{ maxHeight: "55px" }} src={logo} alt=""></img>
                <h1 className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
                <div className='flex  items-center mt-8'>
                    <Facebook fontSize='large'></Facebook>
                    <Instagram className='md:ml-8' fontSize='large'></Instagram>
                    <GitHub className='md:ml-8 ml-2' fontSize='large'></GitHub>
                    <LinkedIn className='md:ml-8 ml-2' fontSize='large'></LinkedIn>
                </div>
            </div>

            <div>
                <h1 className='font-bold'>Discover</h1>
                <h2 className='mt-6'>Home</h2>
                <h2 className='mt-6'>About</h2>
                <h2 className='mt-6'>Tour</h2>
            </div>

            <div>
                <h1 className='font-bold'>Quick Links</h1>
                <h2 className='mt-6'>Gallery</h2>
                <h2 className='mt-6'>Login</h2>
                <h2 className='mt-6'>Register</h2>
            </div>

            <div>
                <h1 className='font-bold'>Contact</h1>
                <h2 className='mt-6'><span className='text-[#faa935] mr-2'><LocationOn/></span><span className='font-bold text-sm'>Address:</span> <span className='text-sm'>Sylfet, Bangaldesh</span></h2>
                <h2 className='mt-6'><span className='text-[#faa935] mr-2'><Email/></span><span className='font-bold text-sm'>Address:</span> <span className='text-sm'>Sylfet, Bangaldesh</span></h2>
                <h2 className='mt-6'><span className='text-[#faa935] mr-2'><Phone/></span><span className='font-bold text-sm'>Address:</span> <span className='text-sm'>Sylfet, Bangaldesh</span></h2>
            </div>

        </div>
    )
}

export default Footer