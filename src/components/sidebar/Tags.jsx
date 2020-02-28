import React from 'react'
import tagStyles from './tags.module.css'

export default function Tags() {
    const tagsData = [
        {name: 'javascript'},
        {name: 'react'},
        {name: 'vue'},
        {name: 'css'},
        {name: 'html'},
        {name: 'node'},
        {name: 'express'},
        {name: 'database'},
    ]
    return (
        <div className="flex flex-wrap">
            {tagsData.map(({name}, i) => (
                <div key={name} className={`${tagStyles.tag} ${tagStyles[name]}`}>
                    {name}
                </div>
            ))}
        </div>
    )
}