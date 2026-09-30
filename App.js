//fitness tracker app
import React from "react";
import {StatusBar} from "react-native";
import FitnessScreen from "./FitnessScreen";

export default function App(){
    return(
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#F7F8F5" />
            <FitnessScreen />
        </>
    );
}