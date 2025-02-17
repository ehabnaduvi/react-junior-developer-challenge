import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
  return <Alert style={{
    width: '50%',
    height: '50px',
    margin: 'auto',
    display: 'block',
    textAlign:'center'
  }}variant={variant}>{children}</Alert>
}

Message.defaultProps = {
  variant: 'info',
}

export default Message