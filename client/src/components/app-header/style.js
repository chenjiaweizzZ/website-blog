import styled from 'styled-components';

const AppHeaderStyled = styled.div`
   height: 50px;
   display: flex;
   justify-content: space-between;
   margin: 10px 180px 10px 180px;
   .header-left {
    line-height: 70px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .header-blog {
      font-weight: 500;
      font-size: 30px;
      margin-left: 20px;
      
    }
    button {
      z-index: 1;
      font-size: 30px;
      /* font-family: inherit; */
      color: black;
      padding: 0.5em 1em;
      outline: none;
      border: none;
      background-color: rgba(0, 0, 0, 0.0);
      }

      button:hover {
      cursor: pointer;
      animation: logo 0.5s;
      }

      @keyframes logo {
      0%,
      100% {
         transform: scale(1, 1);
      }
      25% {
         transform: scale(0.9, 1.1);
      }
      50% {
         transform: scale(1.1, 0.9);
      }
      75% {
         transform: scale(0.95, 1.05);
      }
      }
   }
   .header-right {
    line-height: 70px;
    display: flex;
      span {
      position: relative;
      cursor: pointer;
      width: 100px;
      text-align: center;
         line-height: 50px;
      }
      span::before {
      content: '';
      position: absolute;
      top: -2px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: black;
      transform-origin: bottom right;
      transform: scaleX(0);
      transition: transform 0.5s ease;
      }

      span:hover::before {
      transform-origin: bottom left;
      transform: scaleX(1);
      }
    .menu-item2 {
      /* position: relative; */
      /* display: inline-block;
      animation: spin 5s linear infinite;
      }
      @keyframes spin {
      0% {
      transform: rotate(0deg);
      }
      100% {
      transform: rotate(360deg);
      } */
      border-radius: 50%;
      line-height: 50px;
      cursor: pointer;
      width: 50px;
      text-align: center;
      display:block;
      transition:box-shadow 0.2s ease; 
       &:hover {
         background-color: #f5f5f5;
      }
    }
   }
`

const UserPopStyled = styled.div`
   width: 100px;
   display: flex;
   flex-direction: column;
   align-items: center;
   .user-pop-item {
      border-radius: 40px;
      text-align: center;
      cursor: pointer;
      height: 40px;
      line-height: 40px;
      width: 100%;
      &:hover {
         background-color: #f5f5f5;
      }
   }
`

export {
   AppHeaderStyled,
   UserPopStyled
}