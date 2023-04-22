import React from 'react'

const InputText = () => {
  return (
    <div className='input_chat_box'>
        <input type="text" name="" id="" placeholder='Type your message'/>
        <span className='span_input_chat'>
        <i class="fa fa-clipboard" aria-hidden="true"></i>
        <i class="fa fa-file-image-o" aria-hidden="true"></i>
<button>Send</button>
</span>
    </div>
  )
}

export default InputText