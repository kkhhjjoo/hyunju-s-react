import type { Todo } from '@/types/todo';
import { Link } from 'react-router';

interface TodoListItemProps {
  item: Todo;
}

function TodoListItem({ item }: TodoListItemProps) {
  return (
    <li>
      <span>{item._id}</span>
      <Link to={`/todolist/list/${item._id}`}>{ item.title}</Link>
      <Link to="/todolist/todolist">삭제</Link>
    </li>
  );
}

export default TodoListItem;