import React from "react"

function Footer(){
    const currentYear = new Date().getFullYear()
    return <footer>
        <p>Copyright @ {currentYear} Rizal Fachrudin</p>
    </footer>
}

export default Footer