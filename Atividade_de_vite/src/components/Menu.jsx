import style from './Menu.module.css'

export default function Menu(){
    return(
        <div className={style.divPrincipal}>
            <p>Bah</p>
            <div>
                <p>
                    <a href={'/'}>Home</a>
                </p>
                <p>
                    <a href={'/cards'}>Cards</a>
                </p>
                <p>
                    <a href={'/'}>Contact</a>
                </p>
                <p>
                    <a href={'/'}>Rick and Morty API</a>
                </p>
            </div>
        </div>
    )
}