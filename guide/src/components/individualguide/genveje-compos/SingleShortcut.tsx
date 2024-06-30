import React from 'react'
interface gen {
    command: string;
    description: string;
  }
  interface Props {
    project: gen;
  }
const SingleShortcut: React.FC<Props> =({project})=> {
  return (
    <div className='font-semibold pb-28'>
        <h1 className='pb-2 text-2xl text-center'>{project.command}</h1>
        <p className='text-lg text-center'>{project.description}</p>
    </div>
  )
}

export default SingleShortcut