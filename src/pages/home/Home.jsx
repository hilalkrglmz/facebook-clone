import SideBar from "../../components/Sidebar/SideBar";
import Feed from "../../components/Feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/RightBar/RightBar";
import "./home.css"

export default function Home() {
    return(

        <>
        <Topbar/>
        <div className="homeContainer">
        <SideBar/>
        <Feed/>
        <Rightbar/>        
        </div>
        </>
    )
}