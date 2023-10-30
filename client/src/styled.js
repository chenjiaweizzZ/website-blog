import styled from 'styled-components'
import background from '@/assets/image/background.jpg'

export const AppStyled = styled.div`
    background: url(${background}) no-repeat;
    background-size: 100% 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    .app {
        height: 100%;
    }
    .page {
        height: 100%;
    }
`
