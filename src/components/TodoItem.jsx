function TodoItem({ todo, completed }) {
  return (
    <li className="bg-[#12151e] rounded-2xl p-4 text-xl flex gap-2 justify-between items-center animate-appearing">
      <div className="flex gap-2 items-center flex-1 min-w-0">
        <button className={"uppercase"}>{!completed ? "✔" : "✘"}</button>
        <span
          className={`truncate capitalize ${completed && "line-through"}`}
          title={todo}
        >
          {todo}
        </span>
      </div>
      <ul className="flex gap-2">
        <li>
          <button disabled={completed}>Edit</button>
        </li>
        <li>
          <button>Delete</button>
        </li>
      </ul>
    </li>
  );
}

export default TodoItem;
