import { Directory } from '../../components/directory/directory-component'
import React from 'react'

import './home.styles.scss'

export const HomePage = () => {
    return (
        <div className='homepage'>
            <Directory/>
        </div>
    )
}
