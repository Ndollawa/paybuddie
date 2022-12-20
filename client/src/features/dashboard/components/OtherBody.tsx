import React from 'react'



const OtherBody = ({children}:any) => {
  return (
    <>
      <body className="vh-100">
              <div className="authincation h-100">
                {children}
              </div>

          </body>
    </>
  )
}

export default OtherBody