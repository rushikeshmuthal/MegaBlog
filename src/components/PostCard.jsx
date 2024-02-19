/* eslint-disable react/prop-types */
import appwriteService from "../appwrite/configAW"
import {Link} from "react-router-dom"

function PostCard({$id,title,featuredImage}) {
  return (
    <div>
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-indigo-900 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={appwriteService.getFilePreview(featuredImage)} className="rounded-xl" alt={title} />
                </div>
                <h2 className="text-xl font-bold text-white">{title}</h2>
                 </div>
        </Link>
    </div>
  )
}

export default PostCard