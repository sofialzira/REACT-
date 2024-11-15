import style from './ContactComponent.module.css';
import { CiCircleChevRight } from "react-icons/ci";

import { AiOutlineWechatWork } from "react-icons/ai";





function ContactComponent() {


    return(

        <div className={style.contactContainerGeneral}>
        <div className={style.iconContainer}>

        <AiOutlineWechatWork size={40} color={'#BCBCBC80'} />


        
        </div>
        <div className={style.infoContainer}>
            <div className={style.infoTextContainer}>
                <h2 className={style.subtitle}>Let's </h2>
                <h2 className={style.subtitle}>work <span className={style.wordColor}>together</span></h2>
            </div>
            <div className={style.infoButtonContainer}>
            <a className={style.infoButton} href="">
            <CiCircleChevRight /></a>
            </div>
        </div>
    </div>
    )
}


export default ContactComponent