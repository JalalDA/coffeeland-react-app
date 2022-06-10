import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function navigate(Component) {
        function Navigate(props){
                let navigate = useNavigate()
                return <Component  navigate={navigate} {...props}/>
        }
        return Navigate
}
