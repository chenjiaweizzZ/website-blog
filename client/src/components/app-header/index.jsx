import React, { memo } from 'react'
import { AppHeaderStyled } from './style'
// import { CodeFilled, UserOutlined } from '@ant-design/icons'
// import { Popover } from 'antd';
import { useSelector, shallowEqual } from 'react-redux';

const AppHeader = memo((props) => {
    const { menus } = useSelector((state) => ({ menus: state.home.menus }), shallowEqual)
    return (
        <AppHeaderStyled>
            <div className='header-left'>
                {/* <CodeFilled style={{ fontSize: '50px' }} /> */}
                <button>codehub</button>
            </div>
            <div className='header-right'>
                {
                    menus.map(i => {
                        return (
                            <span className='menu-item' key={i.key}>{i.label}</span>
                            // <span className='menu-item' key={i.key}>{i.label}</span>
                        )
                    })
                }
                {/* <Popover content={<UserPop />} trigger="hover">
                </Popover> */}
            </div>
        </AppHeaderStyled>
    )
})

// const UserPop = memo(() => {
//     return (
//         <UserPopStyled>
//             <div className='user-pop-item'>登陆</div>
//             <div className='user-pop-item'>注册</div>
//             <div className='user-pop-item'>注销</div>
//         </UserPopStyled>
//     )
// })

export default AppHeader