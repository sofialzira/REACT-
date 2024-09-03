import style from './BioDescriptionComponent.module.css';
import { HiOutlineSparkles } from "react-icons/hi2";

function BioDescription() {

    return(

        <div className={style.bioContainerGeneral}>
        <div className={style.bioIconContainer}>

        <HiOutlineSparkles size={30} color={'#BCBCBC80'}/>

        </div>
        <div className={style.bioInfoContainer}>
            <div className={style.name}> Sofia Oliveira</div>
            <div className={style.bio}> I am an enthusiast when it comes to design and arts. While always looking for new inspiration and things to learn about, art became the filter through which I decided to see the world and express myself.
I'm focused on fulfilling objectives, new challenges and being creative.
I am great at adapting and taking criticism, as I see it as an opportunity to grow and learn. </div>
            
    
            </div>
        </div>

    )
}

export default BioDescription