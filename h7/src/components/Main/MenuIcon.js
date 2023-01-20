import React from 'react'
import Icons from '../../assets/sprite.svg'

export const MenuIcon = ({ name, color, size = '18px', stroke}) => {
    return (
        <svg className='icon' fill={color} width={size} height={size} stroke={stroke}>
            <use xlinkHref={`${Icons}#${name}`}/>
        </svg>
    )

}


