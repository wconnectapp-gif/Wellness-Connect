import React from 'react'

const Button = ({btnText}) => {
  return (
    <>
      <button className="mt-2 w-11/12 h-10 rounded-full bg-gradient-to-r from-green-300 to-blue-300 hover:from-green-400 hover:to-blue-400 text-text-headline text-sm font-bold shadow-sm transition-all">
        {btnText}
      </button>
    </>
  )
}

export default Button
