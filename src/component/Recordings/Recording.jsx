import s from './Recording.module.css'
import {headersApi} from "../../API/axios";
import {useEffect, useState} from "react";

const Recording = () => {
    const [state, setState] = useState(0);
    let getHeaders = () => headersApi.get('').then(response => {
         setState(response.data)
    }).catch(err => {
        console.log('server is not aviable' + err)
    })
    useEffect(()=>{
        if(!state){
            getHeaders()
        }
    })
    return (<div className={s.wrapper}>
        {(!state)?"Загрузка...": state.map((x, key)=><div className={s.div}>{x.name}<div><img src={x.photoURL} alt={key}/></div></div>)}
    </div>)
}
export default Recording