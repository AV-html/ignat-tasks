import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import styles from './SuperDoubleRange.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = Omit<DefaultInputPropsType, 'value'> & {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    gap?: number
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        type,
        onChangeRange,
        value = [0, 100],
        gap = 10,
        max,
        className,
        // step, disable, ...
        ...restProps
    }
) => {
    const maxInput = max ? max : value[1]

    // сделать самому, можно подключать библиотеки
    const onChangeHandler0 = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue0 = +e.currentTarget.value
        if (value[1] - newValue0 < gap) {
            onChangeRange && onChangeRange([value[1] - gap, value[1]])
        } else {
            onChangeRange && onChangeRange([newValue0, value[1]])
        }
    }
    const onChangeHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue1 = +e.currentTarget.value
        if (newValue1 - value[0] < gap) {
            onChangeRange && onChangeRange([value[0], value[0] + gap])
        } else {
            onChangeRange && onChangeRange([value[0], newValue1])
        }
    }

    const finalRangeClassName = `${styles['range-input']} ${className ? className : ''}`

    return (
        <div className={styles.slider}>
            <div className={styles.progress} style={{
                left: value[0] / (+maxInput) * 100 + '%',
                right: 100 - value[1] / (+maxInput) * 100 + '%'
            }}>

            </div>
            <div className={finalRangeClassName}>
                <input type={'range'}
                       value={value[0]}
                       onChange={onChangeHandler0}
                       max={maxInput}
                       {...restProps}
                />
                <input type={'range'}
                       value={value[1]}
                       onChange={onChangeHandler1}
                       max={maxInput}
                       {...restProps}
                />
            </div>
        </div>
    )
}


export default SuperDoubleRange
