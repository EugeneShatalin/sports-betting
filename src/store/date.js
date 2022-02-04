import {createSlice} from "@reduxjs/toolkit";

const dateStore = createSlice({
    name: "date",
    initialState: {
        message: 'false',
        messageText: '',
        eventList: [
            {
                key: 0,
                firstTeamName: 'Спартак',
                secondTeamName: 'Динамо',
                eventDate: '12.02.2022',
                coefficientHomeWin: '1.2',
                coefficientDraw: '1.3',
                coefficientAwayWin: '1.6',
            },
            {
                key: 1,
                firstTeamName: 'Барселона',
                secondTeamName: 'Манчестер Юнайтед',
                eventDate: '12.02.2022',
                coefficientHomeWin: '1.1',
                coefficientDraw: '1.2',
                coefficientAwayWin: '1.3',
            },
            {
                key: 2,
                firstTeamName: 'Арсенал',
                secondTeamName: 'Реал Мадрид',
                eventDate: '12.02.2022',
                coefficientHomeWin: '2.2',
                coefficientDraw: '1.8',
                coefficientAwayWin: '1.1',
            },
            {
                key: 3,
                firstTeamName: 'Челси',
                secondTeamName: 'Ювентус',
                eventDate: '12.02.2022',
                coefficientHomeWin: '1.1',
                coefficientDraw: '1.2',
                coefficientAwayWin: '1.6',
            },
        ],
    },
    reducers: {
        addMessage(state) {
            state.message = true
        },
        removeMessage(state) {
            state.message = false
        },
        addMessageText(state, action) {
            state.messageText = action.payload
            console.log('addMessageText')
        },
    }
})

export default dateStore.reducer
export const {addMessage, removeMessage, addMessageText} = dateStore.actions