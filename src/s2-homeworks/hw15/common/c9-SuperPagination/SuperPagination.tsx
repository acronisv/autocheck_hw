import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {

    const lastPage = Math.ceil(totalCount/itemsCountForPage)

    const onChangeCallback = (event: ChangeEvent<any>, page: number) => {
        onChange(page, event.currentTarget.value? +event.currentTarget.value : itemsCountForPage)
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement> ) => {
        console.log('event:',event, 'page:', page)
        onChangeCallback(event, page)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    "margin-right":"30px"
                }}
                shape="rounded"
                color="primary"
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                Показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                className={s.superSelect}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                Строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
