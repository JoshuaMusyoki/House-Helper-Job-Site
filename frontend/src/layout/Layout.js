import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Loader from "../components/layout/Loader"

const Layout=({children})=>{
    return(
        <>
        <Loader/>
        <Navbar/>
        <main>{children}</main>
        <Footer />
        </>
    )
}
export default Layout