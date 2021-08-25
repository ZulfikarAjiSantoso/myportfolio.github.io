
import React from 'react'
import { Link } from 'react-router-dom'


const Footercol = ({
    list = [
        {
            type:'Link',
            title:'Home',
            path:'/home'
        }
    ]
}) => {

    return (
        <div>
            <h2 className="text-2xl mb-2"></h2>
            <ul>
                {list.map((items, index )=>(
                    <li type={index}>
                        {items.type ==='Link' ? (
                            <Link to={items.path}>{items.title}</Link>
                        ) : (
                            <a href={items.path} target="_blank" rel="noreferrer">
                                {items.title}
                            </a>
                        )}
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Footercol
