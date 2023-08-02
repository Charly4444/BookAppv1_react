import { useLocation } from "react-router-dom"
import Base from "../components/base"
import Home from "../components/home"


const Homepage = () => {
    const locate = useLocation()

    // Homepage passes along the user to base pg
    
    return <Base theuser={locate.state.user} propElement={<Home/>}/>

}
export default Homepage
