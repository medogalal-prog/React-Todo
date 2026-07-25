import { File01Icon } from '@hugeicons/core-free-icons'
import { Delete01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import React from 'react'

function TodoEmpty() {
  return (
    <div className='flex flex-col items-center justify-center text-center py-16'>
      <HugeiconsIcon icon={File01Icon} size={40} className=''/>
      <h2 className='font-bold text-2xl mt-3 mb-2'>No Todos Yet</h2>
      <p className='text-gray-400'>Add your first task to get started.</p>
    </div>
  )
}

export default TodoEmpty
