import React from 'react'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PlusSignIcon } from '@hugeicons/core-free-icons'
import { useContext } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { TodoContext } from '@/context/TodoContext'
import toast from 'react-hot-toast'

function TodoForm() {
    const [text,setText]=useState("")
    const { dispatch } = useContext(TodoContext);
    function addTodo(){
        if(!text.trim())return;
        dispatch({
            type:"ADD_TODO",
            payload:{
                id:Date.now(),text,
            },
        })
        setText("")
        toast.success("Task added successfully!", {
			style: {
				border: "1px solid #006400",
				padding: "16px",
				color: "#006400",
			},
			iconTheme: {
				primary: "#006400",
				secondary: "#FFFAEE",
			},
		});
    }
  return (
    <section>
        <div className="conatiner flex items-center gap-3">
            <Input placeholder="Write your task..." value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e) => {
					if (e.key === "Enter") addTodo();
				}}/>
                <Button onClick={addTodo}>
                    <HugeiconsIcon icon={PlusSignIcon} className="mr-2 h-4 w-4"/>
                    ADD
                </Button>
        </div>
    </section>
  )
}

export default TodoForm
