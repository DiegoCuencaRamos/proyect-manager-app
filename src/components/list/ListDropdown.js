import React, { useEffect, useRef, useState } from 'react'
import ListDropdownButton from './ListDropwonButton'
import ListDropdownContent from './ListDropdownContent'

const ListDropdown = ({ id }) => {
    // 1. Variables
    const node = useRef()
    const [open, setOpen] = useState(false)

    // 2. Side effects - DOM manipulation
    useEffect(() => {
        if (open) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    // 3. Events
    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return 
        }
        // Outside click
        setOpen(false)
    }

    const onButtonClicked = e => {
        setOpen(!open)
    }

    const onListClicked = (e) => {
        setOpen(false)
    }

    // 4. Render
    return (
        <div ref={node} className="list__dropdown">
            <ListDropdownButton 
                onButtonClicked={onButtonClicked}
            />
            <ListDropdownContent 
                open={open}
                id={id}
                onListClicked={onListClicked}
            />
        </div>
    )
}

export default ListDropdown