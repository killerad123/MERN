import React from 'react'
// import LogIn from "./LogIn"
import MovieCard from './MovieCard'
// import AdminComponent from './AdminComponent'
// import Navbar from './Navbar'
export default function HomePage() {
    const styles={
        "display":"flex",
        "justifyContent":"space-evenly",
        "padding":"20px"   }
    return (
        <div>
            <div style={styles}>
                <MovieCard/>
                {/* <AdminComponent/> */}
                {/* <LogIn/> */}
            </div>
        </div>
    )
}
