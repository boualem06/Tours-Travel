import avatar from '../assets/images/avatar.jpg'
const Review=()=>{
    return(
        <div className='flex items-center'>
            <img className='h-20 w-20' src={avatar}></img>
            <div>
                <h1 className='font-bold text-blue-900'>user name</h1>
                <h2 className='text-sm text-gray-400'>{"2023-04-27T09:01:36.709Z".slice(0,10)}</h2>
                <h2>this is the review text </h2>
            </div>
        </div>
    )
}

export default Review