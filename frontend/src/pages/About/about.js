import React from "react"

import TopSection from "../../components/about/TopSection"
import MissionVisionSection from "../../components/about/MissionVisionSection"
import HistorySection from "../../components/about/HistorySection"
import Layout from "../../layout/Layout"

const AboutUs =()=>{
    return(
        <>
        <Layout>
            <TopSection/>
            <MissionVisionSection/>
            <HistorySection/>
        </Layout>
            
        </>
    )
}
export default AboutUs