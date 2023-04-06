import React from 'react'

export const LoadMore: React.FC = ({ clickHandle }) => {
  return (
    <button className="btn btn-outline-primary" onClick={clickHandle}>Загрузить ещё</button>
  )
}
