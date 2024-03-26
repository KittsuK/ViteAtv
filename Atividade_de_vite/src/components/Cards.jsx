import style from './Cards.module.css'
import Menu from './Menu'

export const Cards = () =>{
    return(
        <div className={style.wrapCardPrincipal}>
            <Menu/>
            <h1>Cards</h1>
        </div>
    )
}