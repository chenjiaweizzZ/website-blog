import React, { memo } from 'react'
import { HomeStyled } from './style'
import { GithubOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons'

const Home = memo(() => {
    return (
        <HomeStyled>
            <div className='home-avator'>
                <img src={require('@/assets/image/avator.PNG')} alt='avator'/>
            </div>
            <div className='home-name name1'>
                陈家伟的博客
            </div>
            <div className='home-name name2'>
                Jern Chan
            </div>
            <div className='home-name name4'>
                <GithubOutlined/>
                <WechatOutlined/>
                <QqOutlined/>
            </div>
            <div className='home-name name3'>
                <p>
                    我是一个25岁的coder,喜欢设计和编程以及一切富有创造性的事物。这个世界就是我的学校。学自己之所想所爱,自由的身心能使我成为一个一直朝前行走的学者。
                </p>
            </div>
            <div className='record-box'>

            </div>
            <div className='home-footer'>沪ICP备2021031241151号</div>
        </HomeStyled>
    )
})

export default Home