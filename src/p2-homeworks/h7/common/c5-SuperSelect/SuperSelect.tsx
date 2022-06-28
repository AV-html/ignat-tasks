import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {v1} from 'uuid';
import styles from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        className,
        ...restProps
    }
) => {
    const mappedOptions = options ? options.map((op) => {
        return <option key={v1()} value={op}
            // selected={restProps.value === op} // Не нужен!
        >{op}</option>
    }) : []


    // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)

        // onChange, onChangeOption
        // onChange - e
        // onChangeOption - value
    }

    const totalSelectClassName = styles.select + (
        className
            ? ' ' + className
            : ''
    )

    return (
        <select className={totalSelectClassName} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
