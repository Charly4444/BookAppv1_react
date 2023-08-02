import OneBookView from "../components/onebookview"
import hamimg from "../images/hamburger_50.png"
import bookmg from "../images/book_64.png"


import { useLocation } from "react-router-dom"
import Base from "../components/base"


const OneBookPage = ()=> {
    const locate = useLocation()

    // recieve the one book coming from booksdisplay
    return <Base propElement= {<OneBookView thebook={locate.state}/>} />
}
export default OneBookPage
