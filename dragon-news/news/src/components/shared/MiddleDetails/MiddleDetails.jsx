import { Link } from "react-router-dom";

export default function MiddleDetails({n}){
    const{title,image_url,author,details,_id} = n;
    return(
        <div className="font-poppins">
        <div className="border mb-4">
            <div className="flex gap-2 bg-slate-50 rounded w-full h-full">
                <div>
                <img className="rounded-full w-24 h-24 m-4" src={author.img}></img>
                </div>      
            <div className="my-auto">
            <h1 className="">{author.name}</h1>
            <h4>{author.published_date}</h4>
            </div>  
            </div>
            <div>
                <h4 className="font-bold">{title}</h4>
            </div>
            <div>
                <img className="rounded" src={image_url}></img>
            </div>
            <br></br>
            <div>
                <p className="font-poppins">{details.slice(0,200)}
                    ....
                </p>
            </div>
            <Link to={`news/${_id}`} className="text-orange-600">Read More</Link>
           
        </div>
        </div>
    )
}