import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
export default function Bookmarks ({bookmarks,readingTime}){
    return(
        <div className="md:w-1/3">
            <h1>Bookmarks</h1>
            <div>
                <h4>{readingTime}</h4>
            </div>
            <h5 className='text-3xl text-center '>Bookmarked Blogs:{bookmarks.length}</h5>
            
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

Bookmarks.PropTypes = {
    bookmarks: PropTypes.array,
    readingTimes: PropTypes.number
}