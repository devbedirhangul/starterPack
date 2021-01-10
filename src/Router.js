
import React from "react"
import { View, StatusBar } from "react-native"
import { Router, Scene } from "react-native-router-flux"

//Pages
import Home from "./pages/Home"


const RouterComp = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="Home" component={Home} hideNavBar={true}/>
            </Scene>
        </Router>
    )
}
export default RouterComp;