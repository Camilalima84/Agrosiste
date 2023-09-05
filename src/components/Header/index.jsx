import React from "react"
import { MdArrowBack } from 'react-icons/md'
import { CustomHeader } from './style'


export const Header = ({ title, onClick }) => {
    return (
        <CustomHeader>
            <MdArrowBack size={35} onClick={onClick} />
            
            <label>{title}</label>
        </CustomHeader>
    )
}