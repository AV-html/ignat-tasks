import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import styles from './SuperDoubleRange.module.css'

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
        max = 100,
        min = 0,
        className,
        ...restProps
    }
) => {
    value = [value[0] < min ? 0 : value[0], value[1] > max ? 100 : value[1]]
    
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


    const totalSliderClass = `${styles.slider} ${className ? className : ''}`


    return (
        <div className={totalSliderClass}>
            <div className={styles.progress} style={{
                left: value[0] / (+max) * 100 + '%',
                right: 100 - value[1] / (+max) * 100 + '%'
            }}>

            </div>
            <div className={styles.rangeInput}>
                <input type={'range'}
                       value={value[0]}
                       onChange={onChangeHandler0}
                       {...restProps}
                />
                <input type={'range'}
                       value={value[1]}
                       onChange={onChangeHandler1}
                       {...restProps}
                />
            </div>
        </div>
    )
}


export default SuperDoubleRange
