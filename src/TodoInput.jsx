import React, { useState } from 'react'

function TodoInput(props) {
    const [inputText, SetInputText] = useState('');
    return (
        <div className="input-container">
            <input type="text" className='input-box-todo'
             placeholder='add task'
             value={inputText}
              onChange={e =>
               { SetInputText(e.target.value) }} />
            <button className='add-btn' 
            onClick={()=>{
                props.addList(inputText)
                SetInputText("")
            }}>+</button>
            
        </div>
    )
}

export default TodoInput;   