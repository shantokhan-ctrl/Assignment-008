import { FaStar } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { Link } from "react-router";

const Applications = ({singleApp}) => {
    // const data =use( appPromise)
    
    const { image,title,companyName,ratingAvg,downloads,id } = singleApp;
    return (
<Link to={`/appsDetails/${id}`}>
        <div className="card bg-base-100  shadow-sm w-[317px] h-[404px]  ">
  <figure className=" w-[285px] h-[285px]">
    <img
    className="px-[16px] py-[16px]"
      src={image}
      alt="" />
  </figure>
  <div className="card-body">
    <div className="flex justify-center items-center w-full ">
        <h2 className="card-title">{title} :</h2>
    <p className="card-title">{companyName}</p>
    </div>
   
    <div className="flex justify-between card-actions ">
      <button className="btn rounded-4xl text-green-600 bg-gray-200"><LuDownload /> {downloads}
     </button>
      <button className=" btn text-blue-600  bg-gray-200 rounded-4xl "> <FaStar /> {ratingAvg}
     </button>
    </div>
  </div>
</div>
</Link>
    );
};

export default Applications;