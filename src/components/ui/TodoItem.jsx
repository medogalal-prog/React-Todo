import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";
import toast from "react-hot-toast";
import { Delete01Icon } from "@hugeicons/core-free-icons";

import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { Edit01Icon } from "@hugeicons/core-free-icons";
import { Input } from "@/components/ui/input";

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  return (
    <Card className="p-2">
      <div className="px-4 flex items-center justify-between">
        {isEditing ? (
          <Input value={newText} onChange={(e) => setNewText(e.target.value)} />
        ) : (
          <p>{todo.text}</p>
        )}
        <div className="btns flex gap-3 items-center ">
          {isEditing?<Button className="ml-2"  onClick={()=>{
            dispatch({
                type:"UPDATE_TODO",
                payload:{
                    id:todo.id,
                    text:newText,
                }
            });
            setIsEditing(false)
          }}>Save</Button>:
          <Button variant="Edit" size="icon" onClick={() => setIsEditing(true)}>
            <HugeiconsIcon icon={Edit01Icon} className="" />
          </Button>}
          <Button
            variant="destructive"
            size="icon"
            onClick={() => {
              dispatch({
                type: "DELETE_TODO",
                payload: todo.id,
              });
              toast.success("Task deleted successfully!", {
                style: {
                  border: "1px solid #A30000",
                  padding: "16px",
                  color: "#A30000",
                },
                iconTheme: {
                  primary: "#A30000",
                  secondary: "#FFFAEE",
                },
              });
            }}
          >
            <HugeiconsIcon icon={Delete01Icon} />
          </Button>
        </div>
      </div>
    </Card>
  );
}
