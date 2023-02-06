import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера
                'max-width': '170px',
                '.MuiSlider-rail':{
                    'color': '#8B8B8B'
                },
                '.MuiSlider-track':{
                    'color': '#00CC22'
                },
                '.MuiSlider-thumb': {
                    'border': '1px solid #00CC22',
                    'color': '#ffffff',
                    ':before': {
                        'width': '30%',
                        'height': '30%',
                        'background': '#00CC22',
                        'box-shadow': 'none'
                    }
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
