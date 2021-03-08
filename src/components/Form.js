import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import { DateRangePicker } from 'react-dates'
import { v4 as uuidv4 } from 'uuid';


const ItemForm = ({ isProyect, proyectId, item, onParentFormSubmit }) => {
    // Variables
    const history = useHistory()
    // State
    const [name, setName] = useState(item ? item.name : '')
    const [description, setDescription] = useState(item ? item.description : '')
    const [status, setStatus] = useState(item ? item.status : '')
    const [invoice, setInvoice] = useState(item ? item.invoice : '')
    const [ startDate, setStartDate ] = useState(item ? moment(item.startDate) : null)
    const [ endDate, setEndDate ] = useState(item ? moment(item.endDate) : null)
    const [ calendarFocused, setCalendarFocused ] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

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

    const onDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const onDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate)
        setEndDate(endDate)
    }

    const onFocusChange = calendarFocused => {
        setCalendarFocused(calendarFocused)
    }

    const onChildFromSubmit = (e) => {
        e.preventDefault()

        const commonItem = {
            name,
            description,
            status,
            startDate: startDate.startOf('day').valueOf(),
            endDate: endDate.startOf('day').valueOf()
        }

        if (name && status && startDate && endDate) {
            onParentFormSubmit((
                isProyect 
                ? {
                    ...commonItem,
                    invoice
                } : {
                    ...commonItem,
                    proyectId
                }
            )) 
            history.push(isProyect ? '/dashboard' : `/proyect/${proyectId}`)
        } else {
            setErrorMessage('Please provide title, status and dates for your proyect')
        }
    }

    // Render
    return (
        <div className="container">
            {errorMessage && <p>{errorMessage}</p>}

            <form className="form" onSubmit={onChildFromSubmit}>
                <div className="form__item-wrapper--title">
                    <input 
                        className="form__item--title"
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={onNameChange}
                    />
                </div>
                <div className="form__flex-wrapper">
                    <div className={`${isProyect ? 'form__item-wrapper--inline-input' : 'form__item-wrapper--inline-task'}`}>
                        <select 
                            className="form__item--normal"
                            value={status}
                            onChange={onStatusChange}
                        >
                            <option defaultValue value="">Select status</option>
                            <option value="todo">To do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                    
                    {isProyect && <div className="form__item-wrapper--inline-input">
                        <input 
                            className="form__item--normal"
                            type="number"
                            value={invoice}
                            placeholder="Invoice"
                            onChange={onIvoiceChange}
                        />
                    </div>}
                </div>

                <div className="form__item-wrapper--normal">
                    <DateRangePicker 
                        startDate={startDate}
                        startDateId={uuidv4()}
                        endDate={endDate}
                        endDateId={uuidv4()}
                        onDatesChange={onDatesChange}
                        focusedInput={calendarFocused}
                        onFocusChange={onFocusChange}
                        showClearDates={true}
                        // numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>

                <div className="form__item-wrapper--normal">
                    <textarea 
                        className="form__item--textarea"
                        value={description}
                        placeholder="Description"
                        onChange={onDescriptionChange}
                    />
                </div>             
                <button className="button">Save proyect</button>
            </form>
        </div>
    )
}

export default ItemForm