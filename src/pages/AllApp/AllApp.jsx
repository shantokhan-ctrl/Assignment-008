
import { useLoaderData } from "react-router";
import Application from "../Application/Application";



const AllApp = () => {
  const data = useLoaderData();
  console.log(data);
  
    return (
        <div>
        
        <Application data={data}></Application>
        </div>
    );
};

export default AllApp;
