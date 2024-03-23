import { useState } from "react";

export const SimpleStack = () => {
  const [stack, setStack] = useState<number[]>([]);
  const [msg, setMsg] = useState<string>('');

  const onAdd = (number: number) => {
    setMsg('');
    setStack([...stack, number]);
  }

  const onRemoveAllowed = () => {
    if (stack.length > 0) {
      setMsg('');
      setStack(stack.slice(0, stack.length - 1));
    }
  }

  const onRemoveNotAllowed = () => {
    setMsg('You can only remove the top element from the stack');
  }

  const onRemove = (e: any) => {
    if (e.target.value === stack[stack.length - 1]) {
      onRemoveAllowed();
    } else {
      onRemoveNotAllowed();
    };
  }

  return (
    <div>
      <div className="stack">{stack.map(item => (<button key={item} value={item} onClick={onRemove}>{item}</button>))}</div>
      <div className="list">
        <button onClick={() => onAdd(1)}>Add 1</button>
        <button onClick={() => onAdd(2)}>Add 2</button>
        <button onClick={() => onAdd(3)}>Add 3</button>
      </div>
      <span>{msg}</span>
    </div>
  )
}