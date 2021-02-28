import vkIcon from "../../images/vk.svg"
import telegramm from "../../images/Telegra.svg"
import whtsapp from "../../images/whatsapp-icon.svg"
import gmail from "../../images/gmail.svg"
import s from  "./Footer.module.css"

const Footer= ()=>{
    let copyToClipboard=()=> {navigator.clipboard.writeText('matus1888@gmail.com')
        .then(() => {
            alert('Адрес был скопирован в буфер обмена!')
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
    }
    return(<div className={s.wrapper}>
        <div>вы всегда можете со мной связаться</div>
        <div>
            <a href="https://vk.com/id101179628"><img className={s.iconVK}  src={vkIcon} alt="vkIcon"/></a>
            <a href="https://t.me/matus1888"><img className={s.iconTLG}  src={telegramm} alt="tlg"/></a>
            <a href="https://wa.me/+79654748370"><img className={s.iconVK}  src={whtsapp} alt="wsp"/></a>
            <img className={s.iconMail}
                                         onClick={()=>copyToClipboard()}
                                         src={gmail} alt="mail"/>
        </div>
    </div>)
}

export default Footer