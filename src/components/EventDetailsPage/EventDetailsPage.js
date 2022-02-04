import {useDispatch, useSelector} from "react-redux";
import styles from "./eventDetailsPage.module.css";
import {useLocation} from "react-router";
import {addMessage, addMessageText} from "../../store/date";
import {Link} from "react-router-dom";


function EventDetailsPage() {

    const eventList = useSelector(state => state.date.eventList)

    const location = useLocation();
    const keyEvent = location.state.numberKey;
    const elem = eventList[keyEvent];

    const dispatch = useDispatch();


    const changCoefficient = (event, eventName, coef) => {
        if(event.currentTarget.checked) {
            switch (eventName) {
                case 'HomeWin':
                    dispatch(addMessageText(`Спасибо, ваша ставка на матч ${elem.firstTeamName}-${elem.secondTeamName}, ставка на победу хозяев с коэффициентом ${coef} принята`));
                    dispatch(addMessage())
                    break;
                case 'Draw':
                    dispatch(addMessageText(`Спасибо, ваша ставка на матч ${elem.firstTeamName}-${elem.secondTeamName}, ставка на ничью с коэффициентом ${coef} принята`));
                    dispatch(addMessage())
                    break;
                case 'AwayWin':
                    dispatch(addMessageText(`Спасибо, ваша ставка на матч ${elem.firstTeamName}-${elem.secondTeamName}, ставка на победу гостей с коэффициентом ${coef} принята`));
                    dispatch(addMessage())
                    break;
                default:
                    dispatch(addMessageText(''));
            }
        }
    }

    return (
        <div className={styles.event}>
            <p className={styles.p}>Команда хозяев поля: <span>{elem.firstTeamName}</span></p>
            <p className={styles.p}>Команда гостей: <span>{elem.secondTeamName}</span></p>
            <p className={styles.p}>Дата события: <span>{elem.secondTeamName}</span></p>

            <p className={styles.coef}>Выберите коэффициент:</p>
            <div className={styles.coef__item}>
                <input onChange={(e) => changCoefficient(e, 'HomeWin', elem.coefficientHomeWin)}
                       type="radio"
                       id="coefficient1"
                       name="coefficient"
                       value="coefficientHomeWin"
                />
                <label htmlFor="contactChoice1"> Победа хозяев {elem.coefficientHomeWin}</label>
            </div>
            <div className={styles.coef__item}>
                <input onChange={(e) => changCoefficient(e, 'Draw', elem.coefficientDraw)}
                    type="radio"
                       id="coefficient2"
                       name="coefficient"
                       value="coefficientDraw"/>
                <label htmlFor="contactChoice2"> Ничья {elem.coefficientDraw}</label>
            </div>
            <div className={styles.coef__item}>
                <input onChange={(e) => changCoefficient(e, 'AwayWin', elem.coefficientAwayWin)}
                       type="radio"
                       id="coefficient3"
                       name="coefficient"
                       value="coefficientAwayWin"/>
                <label htmlFor="contactChoice3"> Победа гостей {elem.coefficientAwayWin}</label>
            </div>

           <Link to="/*" className={styles.button}>Сделать ставку</Link>
        </div>
    );
}

export default EventDetailsPage;