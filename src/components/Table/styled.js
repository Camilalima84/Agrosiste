import styled from "styled-components";
import { Tr } from '@chakra-ui/react';


export const Headingtable = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
`;

export const CardList = styled(Tr)`
    /* width: 100%; */
    height: 50px;
    /* display: flex; */
    /* justify-content: space-between; */
    /* align-items: center; */
    /* padding: 10px 20px; */
    color: #169C00;
    border-radius: 15;
    background: #fff;
`;

export const ItemActions = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;

    button {
        height: 30px;
        width: 30px;
        padding: 3px;

    }
`;