import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const AdminLayout = ({children}:Props) => {
  return (
    <div >
        <div>{children}</div>
    </div>
  )
}

export default AdminLayout