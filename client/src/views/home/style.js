import styled from 'styled-components';

const HomeStyled = styled.div`
    margin: 10px 180px 10px 180px;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .home-avator {
        display: flex;
        justify-content: center;
        height: 160px;
        img {
            border-radius: 50%;
            height: 130px;
            width: 130px;
            
        }
    }
    .home-name {
        cursor: default;
        display: flex;
        justify-content: center;
        text-align: center;
        img {
            border-radius: 50%;
            height: 130px;
            width: 130px;
        }
    }
    .name1 {
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 28px;
        p:hover {
            animation: heartBeat 1s;
        }
        @keyframes heartBeat {
            from,
  to {
    transform: translate3d(0, 0, 0);
            }
            10%,
            30%,
            50%,
            70%,
            90% {
                transform: translate3d(0, -0.5rem, 0);
            }
            20%,
            40%,
            60%,
            80% {
                transform: translate3d(0, 0.5rem, 0);
            }
        }
    }
    .name2 {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 22px;
    }
    .name3 {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 15px;
        p {
            width: 400px;
        }
    }
    .name4 {
        span {
            cursor: pointer;
            margin-left: 5px;
            margin-right: 5px;
        }
    }
    .home-footer {
        font-size: 12px;
        cursor: default;
        position: absolute;
        bottom: 80px;
        left: 50%;
        transform: translate(-50%, -50%)
    }
`

export {
    HomeStyled
}

