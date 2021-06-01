import styled from "@emotion/styled";

export const ListDropdowStyled = styled.div`
    width: 705px;
    height: auto;
    max-height: 450px;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 3;
    overflow-y: scroll;
    top: 100px;
    right: 100px;
    ::-webkit-scrollbar{
        width: 7px;
    }
    ::-webkit-scrollbar-thumb{
        background: #38A6AD;
    }
    
`;