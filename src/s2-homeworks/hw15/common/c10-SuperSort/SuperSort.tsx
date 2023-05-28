import React from 'react'
import downIcon from '../../assets/sort-down.png'
import upIcon  from '../../assets/sort-up.png'
import noneIcon from '../../assets/sort.png'
import s from '../../HW15.module.css'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    let nextSort = down
        if (sort === '') {
            nextSort = down
        } else if (sort === down) {
            nextSort = up
        } else if (sort === up) {
            nextSort = ''
        }

    return nextSort
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            className={s.sortIcon}
        >
            <img alt='sort'
                id={id + '-icon-' + sort}
                src={icon}
            />
        </span>
    )
}

export default SuperSort
