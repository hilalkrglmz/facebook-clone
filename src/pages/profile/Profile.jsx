import SideBar from "../../components/Sidebar/SideBar";
import Feed from "../../components/Feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/RightBar/RightBar";
import "./profile.css"


export default function Profile() {
    return(
        <>
        <Topbar/>
        <div className="profile">
        <SideBar/>
        <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
            <img className="profileUserImg" src="assets/person/1.jpeg" alt="" />

            </div>
        <div className="profileInfo">
            <h4 className="ProfileInfoName">Hilal Kar</h4>
            <span className="profileInfoDesc">Hello my friends!</span>
        </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
        <Rightbar profile/>        

        </div>
        </div>
        </div>
        </>
    )
}