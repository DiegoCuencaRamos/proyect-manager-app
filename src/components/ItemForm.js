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
        <React.Fragment>
            {errorMessage && <p>{errorMessage}</p>}

            <form onSubmit={onChildFromSubmit}>
                <input 
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    type="text" 
                    value={description}
                    placeholder="Description"
                    onChange={e => setDescription(e.target.value)}
                />
                <select 
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                >
                    <option defaultValue value="">Select status</option>
                    <option value="todo">To do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
                {
                    isProyect &&
                    <input 
                        type="number"
                        value={invoice}
                        placeholder="Invoice"
                        onChange={e => setInvoice(e.target.value)}
                    />
                }               
                <button>Save proyect</button>
            </form>
        </React.Fragment>
    )
}

export default ItemForm