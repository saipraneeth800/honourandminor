import React from 'react'

const fields = (props) => {
    console.log(props)
  return (
    <>
        <input
                      type="number"
                    //   key={i}
                    //   name={"minor" + (i+1)}
                    //   onChange={SendData}
                    //   placeholder={"Minor " + (i + 1)}
                    placeholder={props.regulation}
                      className="rounded border-2 border-indigo-900 h-10 form-input lg:w-50 mt-3 text-center"
                    />
    </>
  )
}

export default fields