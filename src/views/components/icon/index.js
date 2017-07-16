import React from 'react'
import classnames from 'classnames'

const Icon = ({className, name}) => {
  const cssClasses = classnames('material-icons', className)
  return <span className={cssClasses}>{name}</span>
}

export default Icon
