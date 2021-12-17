import React from 'react';
import "./Home.css";
import {motion} from "framer-motion";

function Header() {
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1,rotateZ:360}}
        className="title" data-text="CAFETARIA">
            CAFETARIA
        </motion.div>
    )
}

export default Header;
