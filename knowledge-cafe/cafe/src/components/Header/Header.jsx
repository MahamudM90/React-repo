import profile from '../../assets/images/profile.png'
export default function Header(){
    return(
       
        <div className='flex justify-between items-center p-4 mx-4 border-b-2 max-w-7xl mx-auto'>
        <h1 className="text-2xl font-bold">Knowledge Cafe</h1>
        <img src={profile} alt=''></img>
        </div>
        
    )
}