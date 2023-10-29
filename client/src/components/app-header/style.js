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
   }
   .header-right {
    line-height: 70px;
    display: flex;
    .menu-item {
      border-radius: 60px;
      line-height: 50px;
      cursor: pointer;
      width: 100px;
      text-align: center;
      display:block;
      transition:box-shadow 0.2s ease; 
      font-weight: 500;
      font-size: 16px;
       &:hover {
         background-color: #f5f5f5;
      }
    }
    .menu-item2 {
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

export  {
   AppHeaderStyled,
   UserPopStyled
}