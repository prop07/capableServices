import React from 'react'

const TextHeader = ({title, ...Props}) => {
  return (
    <div className="text-center text-2xl font-semibold">{title}</div>
  )
}

export default TextHeader