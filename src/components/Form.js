import React, { useState } from 'react'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
// React dates
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css' // CSS
import 'react-dates/initialize' // JS

const ItemForm = ({ isProyect = false, proyectId = null, item, onParentFormSubmit }) => {
    // State
    const [ name, setName ] = useState(item ? item.name : '')
    const [ status, setStatus ] = useState(item ? item.status : '')
    const [ invoice, setInvoice ] = useState(item ? item.invoice : '')
    const [ startDate, setStartDate ] = useState(item ? moment(item.startDate) : null)
    const [ endDate, setEndDate ] = useState(item ? moment(item.endDate) : null)
    const [ color, setColor ] = useState(item ? item.color : '#87cefa')
    const [ description, setDescription ] = useState(item ? item.description : '')
    const [ calendarFocused, setCalendarFocused ] = useState(null)
    const [ errorMessage, setErrorMessage ] = useState('')

    const statusStyle = { 
        flexBasis: isProyect ? '48%' : '100%',
        marginRight: isProyect ? '4%' : '0',
    }

    // Events
    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    const onIvoiceChange = (e) => {
        setInvoice(e.target.value)
    }

    const onDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate)
        setEndDate(endDate)
    }

    const onFocusChange = calendarFocused => {
        setCalendarFocused(calendarFocused)
    }

    const onColorChange = (e) => {
        setColor(e.target.value)
    }

    const onDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const onChildFromSubmit = (e) => {
        e.preventDefault()
        
        if (name && status && startDate && endDate) {
            const commonItem = {
                name,
                status,
                startDate: startDate.startOf('day').valueOf(),
                endDate: endDate.startOf('day').valueOf(),
                color,
                description,
            }
            const proyectItem = { ...commonItem, invoice }
            const taskItem = proyectId ? { ...commonItem, proyectId } : commonItem

            setErrorMessage('')
            onParentFormSubmit((isProyect ? proyectItem : taskItem)) 
        } else {
            setErrorMessage('Please provide dates')
        }
    }

    // Render
    return (
        <div className="container">
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <form className="form" onSubmit={onChildFromSubmit}>
                <div className="form__wrapper">
                    <input 
                        className="form__item--name"
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={onNameChange}
                        required
                    />

                    <select 
                        className="form__item--status"
                        style={statusStyle}
                        value={status}
                        onChange={onStatusChange}
                        required
                    >
                        <option defaultValue value="">Select status</option>
                        <option value="todo">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>

                    {isProyect && 
                        <input 
                            className="form__item--invoice"
                            type="number"
                            value={invoice}
                            placeholder="Invoice"
                            onChange={onIvoiceChange}
                        />
                    }
                    
                    <DateRangePicker 
                        startDate={startDate}
                        startDateId={'mock-id-1'}
                        endDate={endDate}
                        endDateId={'mock-id-2'}
                        onDatesChange={onDatesChange}
                        focusedInput={calendarFocused}
                        onFocusChange={onFocusChange}
                        // showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />

                    <label className="form__item--color"> 
                        Choose {isProyect ? 'proyect' : 'task'} color:
                        <input 
                            type="color" 
                            value={color}
                            onChange={onColorChange}
                        />
                    </label>

                    <textarea 
                        className="form__item--description"
                        value={description}
                        placeholder="Description"
                        onChange={onDescriptionChange}
                    />

                    <input 
                        className="form__item--submit button"
                        type="submit"
                        value={`Save ${isProyect ? 'proyect' : 'task'}`}
                    />
                </div>             
            </form>
        </div>
    )
}

export default ItemForm