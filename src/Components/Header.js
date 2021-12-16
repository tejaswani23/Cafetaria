import React from 'react';
import "./Home.css";
import {motion} from "framer-motion";

function Header() {
    return (
        <motion.div 
        animate={{rotateZ:360}}
        className="title" data-text="CAFETARIA">
            CAFETARIA
        </motion.div>
    )
}

export default Header;
