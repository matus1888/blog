import s from './App.module.css';
import Recording from "./component/Recordings/Recording";
import React, {useEffect, useState} from "react";
import AboutUs from "./component/AboutUs/AboutUs";
import Projects from "./component/Projects";
import img from './images/ether.gif'
import api from './API/axios'
import Footer from "./component/Footer/Footer";

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
    let json = () => {
        api.get('avgPrice?symbol=ETHUSDT').then(response => {
            setState({...state, price: response.data.price})
        })
    }
    useEffect(
        () => {
            if (state.price === 0) {
                json()
            }
            let u = setTimeout(() => json(), 5000)
            return () => {
                clearTimeout(u)
            }
        }
    )
    return (<div className={s.wrapper}>
        <div className={s.logo}>
            <img className={s.imageOfLogo} src={img} alt="logo"/>
        </div>
        <div className={s.header}>
            <div className={s.headerOne}>
                ТЕМ ВРЕМЕНЕМ ЭФИР СТОИТ {Math.round(state.price)} $!!!!
                <span className={s.span}>
                    <a href="/">Войти</a>
                </span>
            </div>
            <div className={s.headerTwo}>
                <button className={s.button}
                        onClick={() => setState({...state, active: true, one: true, two:false, three:false, four:false})}>Обо мне
                </button>
                <button className={s.button}
                        onClick={() => setState({...state, active: true, one: false, two:true, three:false, four:false})}>Проекты
                </button>
                <button className={s.button}
                        onClick={() => setState({...state, active: true, one: false, two:false, three:true, four:false})}>Топ
                </button>
                <button className={s.button}
                        onClick={() => setState({...state, active: true, one: false, two:false, three:false, four:true})}>Реклама
                </button>
            </div>
            <div className={state.active ? s.headerThreeActive : s.headerThree}>
                {(state.one) && <AboutUs/>}
                {(state.two) && <Projects/>}
                {(state.three) && <AboutUs/>}
                {(state.four) && <AboutUs/>}
                {state.active && <div className={s.hide} onClick={() => setState({...initialState, price: state.price})}>скрыть^</div>}
            </div>
        </div>
        <div className={s.body} onClick={() => {
            setState({...state, active: false, one: false, two: false, three: false, four: false})
        }}>
            <Recording/>
        </div>
        <div className={s.footer} onClick={() => {
            setState({...state, active: false, one: false, two: false, three: false, four: false})
        }}>
            <Footer/>
        </div>
    </div>)
}
export default App