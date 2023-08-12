import { Outlet } from "react-router-dom";

export default function ShowsLayout(){
    return(
        <div className="shows-layout">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae ea quo sunt maxime minima quod dolorum inventore officia earum? Laudantium voluptatem, recusandae numquam qui cum nemo nulla doloribus eveniet impedit dolorum error beatae assumenda alias modi aliquid? Voluptate, amet.</p>

            <Outlet/>
        </div>
    )
}