import React from 'react'
import { useSearchParams } from 'react-router-dom'

const withSearchParams = (Component) => {
    function WithSearchParams (props){
        let [searchParams, setSearchParams] = useSearchParams()
        return <Component
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        />
    }
return WithSearchParams
}

export default withSearchParams