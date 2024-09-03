import style from './BioTitleComponent.module.css'
import { BsSuitDiamondFill } from "react-icons/bs";


function BioTitle() {

    return(

        <div className={style.titleContainer}>
            <BsSuitDiamondFill size={30} color={'#BCBCBC80'}/>
            <div className={style.title}>self-summary</div>
            <BsSuitDiamondFill size={30} color={'#BCBCBC80'}/>
        </div>

    )
}

export default BioTitle