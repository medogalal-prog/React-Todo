import { TodoContext } from "@/context/TodoContext";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun01Icon } from "@hugeicons/core-free-icons";
export default function ThemeToggle() {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <Button variant="outline" size="icon" onClick={()=>dispatch({ type: "TOGGLE_THEME" })}>
      {state.theme === "light" ? (
        <HugeiconsIcon icon={Moon02Icon} />
      ) : (
        <HugeiconsIcon icon={Sun01Icon} />
      )}
    </Button>
  );
}
