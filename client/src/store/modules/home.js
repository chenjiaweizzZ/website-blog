import { createSlice } from "@reduxjs/toolkit"

const menuSlice = createSlice({
    name: 'home',
    initialState: {
        menus: [
            {
                key: 1,
                label: '首页',
            },
            {
                key: 2,
                label: '笔记',
            },
            {
                key: 3,
                label: '友链',
            },
            {
                key: 4,
                label: '树洞',
            },
        ]
    },
    reducers: {
        setMenu(state, { payload }) {
            state.menus = payload
        }
    }
})

export const { setMenu } = menuSlice.actions
export default menuSlice.reducer