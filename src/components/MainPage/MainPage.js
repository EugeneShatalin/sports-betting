import {useDispatch, useSelector} from "react-redux";
import styles from "./mainPageCSS.module.css";
import {Link} from "react-router-dom";
import {removeMessage} from "../../store/date";
import {useEffect, useLayoutEffect} from "react";

function MainPage() {
    const eventList = useSelector(state => state.date.eventList);
    const message = useSelector(state => state.date.message);
    const messageText = useSelector(state => state.date.messageText);    

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(removeMessage());
        }, 10000)
    })


    return (
        <div>
            {
                message ? <div className={styles.message}>{messageText}</div>  : <></>
            }


            {
                eventList.map(elem => (
                    <Link className={styles.link} to="/event" state={{numberKey: elem.key}}>
                        <div className={styles.event} key={elem.key}>
                            <h2 className={styles.title}>Матч</h2>
                            <p className={styles.p}><span>{elem.firstTeamName}</span> - <span>{elem.secondTeamName}</span>
                            </p>
                        </div>
                    </Link>
                )
            )
            }
        </div>
    );
}

export default MainPage;