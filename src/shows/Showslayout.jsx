import { Outlet } from "react-router-dom";

export default function ShowsLayout(){
    return(
        <div className="shows-layout">
            <Outlet/>
        </div>
    )
}