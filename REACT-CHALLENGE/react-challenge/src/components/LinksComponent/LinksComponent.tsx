import style from './LinksComponent.module.css';
import { BsSuitDiamondFill } from "react-icons/bs";


function Links() {

    return (
        <div className={style.linksGeneralContainer}>
             <div className={style.linksWrapper}>
                    <ul>
                        <li className={style.vaiCaralho}> <span className={style.linkText}>React</span></li>
                        <BsSuitDiamondFill size={12} color={'#4d6f7b'}/><li> <span className={style.linkText}>Javascript</span></li>
                        <BsSuitDiamondFill size={12} color={'#4d6f7b'}/><li><span className={style.linkText}>Backend</span></li>
                        <BsSuitDiamondFill size={12} color={'#4d6f7b'}/><li><span className={style.linkText}>NodeJS</span></li>
                    </ul>
                    <ul>
                    <li className={style.vaiCaralho}> <span className={style.linkText}>HTML/CSS</span></li>
                        <BsSuitDiamondFill size={12} color={'#4d6f7b'}/><li> <span className={style.linkText}>Git</span></li>
                        <BsSuitDiamondFill size={12} color={'#4d6f7b'}/><li><span className={style.linkText}>Figma</span></li>
                        <BsSuitDiamondFill size={12} color={'#4d6f7b'}/><li><span className={style.linkText}>Adobe Suite</span></li>
                    </ul>
                </div>
        </div>
    )
}

export default Links