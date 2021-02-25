import s from './App.module.css';
import Recording from "./component/Recording";
import {useEffect, useState} from "react";
import AboutUs from "./component/AboutUs";
import Projects from "./component/Projects";
import img from './images/sailing-black-48dp.svg'
import api from './API/axios'

const App = () => {
    const initialState = {
        active: false,
        one: false,
        two: false,
        three: false,
        four: false,
        price: 0
    }
    const [state, setState] = useState(initialState);
    let   json=()=> {
        api.get('avgPrice?symbol=ETHUSDT').then(response => {
             setState({...state, price: response.data.price})
        })
    }
    useEffect(
        ()=> {
            if(state.price===0){json()}
            let ti =()=> setTimeout(() => json(), 5000)
            ti()
            return ()=>{clearTimeout(ti())}
        }

    )
    return (<div className={s.wrapper}>
        <div className={s.logo}>
            {state.price!==0&&<div className={s.etherPrice}>{Math.round(state.price)}</div>}
            <img className={s.logo} src={img} alt="logo"/>
        </div>
        <div className={s.header}>
            <div className={s.headerOne}>ТОТ САМЫЙ ЕБУЧИЙ САЙТ-БЛОГ</div>
            <div className={s.headerTwo}>
                <button className={s.button} onClick={() => setState({...initialState, active: true, one: true})}>Обо
                    мне
                </button>
                <button className={s.button}
                        onClick={() => setState({...initialState, active: true, two: true})}>Проекты
                </button>
                <button className={s.button}
                        onClick={() => setState({...initialState, active: true, three: true})}>Топ
                </button>
                <button className={s.button}
                        onClick={() => setState({...initialState, active: true, four: true})}>Реклама
                </button>
            </div>
            <div className={state.active ? s.headerThreeActive : s.headerThree}>
                {(state.one) && <AboutUs/>}
                {(state.two) && <Projects/>}
                {(state.three) && <AboutUs/>}
                {(state.four) && <AboutUs/>}
                {state.active && <div className={s.hide} onClick={() => setState(initialState)}>скрыть^</div>}
            </div>
        </div>
        <div className={s.body} onClick={() => {
            setState(initialState)
        }}>
            <Recording/>
        </div>
        <div className={s.footer} onClick={() => {
            setState(initialState)
        }}>footer
        </div>
    </div>)
}
export default App