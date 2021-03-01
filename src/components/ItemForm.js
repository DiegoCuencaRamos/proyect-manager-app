import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const ItemForm = ({ isProyect, proyectId, item, onParentFormSubmit }) => {
    // State
    const [name, setName] = useState(item ? item.name : '')
    const [description, setDescription] = useState(item ? item.description : '')
    const [status, setStatus] = useState(item ? item.status : '')
    const [invoice, setInvoice] = useState(item ? item.invoice : '')
    const [errorMessage, setErrorMessage] = useState('')
    const history = useHistory()
    // Events
    const onChildFromSubmit = (e) => {
        e.preventDefault()

        const commonItem = {
            name,
            description,
            status,
        }

        if (name && status) {
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
            setErrorMessage('Please provide title and status for your proyect')
        }
    }
    // Render
    return (
        <div className="container">
            {errorMessage && <p>{errorMessage}</p>}

            <form 
                className="form"    
                onSubmit={onChildFromSubmit}
            >
                <div className="form__item-wrapper--title">
                    <input 
                        className="form__item--title"
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form__flex-wrapper">
                    <div className={`${isProyect ? 'form__item-wrapper--inline-input' : 'form__item-wrapper--inline-task'}`}>
                        <select 
                            className="form__item--normal"
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        >
                            <option defaultValue value="">Select status</option>
                            <option value="todo">To do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                    
                    {isProyect &&
                        <div className="form__item-wrapper--inline-input">
                                <input 
                                    className="form__item--normal"
                                    type="number"
                                    value={invoice}
                                    placeholder="Invoice"
                                    onChange={e => setInvoice(e.target.value)}
                                />
                        </div>
                    }
                </div>
                <div className="form__item-wrapper--normal">
                    <textarea 
                        className="form__item--textarea"
                        value={description}
                        placeholder="Description"
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>             
                <button className="button">Save proyect</button>
            </form>
        </div>
    )
}

export default ItemForm