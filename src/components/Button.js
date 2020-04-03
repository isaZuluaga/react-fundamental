import React from 'react'

const Button = ({
  classes = 'btn',
  content = 'Click me!',
  ...props
}) => <button className={`${classes}`} {...props}>
  { content }
</button>

export default Button
