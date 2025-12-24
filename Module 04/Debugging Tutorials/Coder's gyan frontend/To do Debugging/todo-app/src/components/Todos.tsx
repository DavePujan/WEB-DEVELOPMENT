import { useState } from 'react';

// Types for our Todo items
interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
}

const Todos = () => {
    // 1. STATE MANAGEMENT
    // Matches the hooks shown in the video's DevTools
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: 'Buy Milk', isCompleted: false },
        { id: 2, text: 'Do Code Review', isCompleted: true },
        { id: 3, text: 'Go to the Gym', isCompleted: false },
        { id: 4, text: 'Read a Book', isCompleted: true },
    ]);

    const [newTodo, setNewTodo] = useState<string>('');
    const [filter, setFilter] = useState<string>('all'); // State can be: 'all', 'active', 'completed'

    // 2. HANDLERS
    const handleAddTodo = () => {
        if (!newTodo.trim()) return;
        const newItem: Todo = {
            id: Date.now(),
            text: newTodo,
            isCompleted: false,
        };
        setTodos([...todos, newItem]);
        setNewTodo('');
    };

    const toggleCompletion = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ));
    };

    // 3. THE BUGGY LOGIC
    // This is the filtering logic shown at timestamp [00:03:23]
    const filteredTodos = todos.filter((todo) => {
        switch (filter) {
            case 'all':
                return true;
            case 'active':
                return !todo.isCompleted;

            // THE BUG IS HERE: 
            // The state is set to 'completed', but the case checks for 'complete' (Typo).
            // This forces execution into the 'default' case, which returns true (showing everything).
            case 'complleted':
                return todo.isCompleted;

            default:
                return true; // This is why "Completed" tab shows all items in the video
        }
    });

    return (
        <div className="card">
            <div className="card-header">
                <h2>Todo List</h2>
            </div>

            <div className="card-content">
                {/* Input Section */}
                <div className="input-group">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="What needs to be done?"
                    />
                    <button onClick={handleAddTodo}>Add</button>
                </div>

                {/* Filter Tabs */}
                <div className="filters">
                    <button
                        className={filter === 'all' ? 'active-tab' : ''}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={filter === 'active' ? 'active-tab' : ''}
                        onClick={() => setFilter('active')}
                    >
                        Active
                    </button>
                    <button
                        className={filter === 'completed' ? 'active-tab' : ''}
                        onClick={() => setFilter('completed')}
                    >
                        Completed
                    </button>
                </div>

                {/* List Section */}
                <ul className="todo-list">
                    {filteredTodos.map((todo) => (
                        <li key={todo.id} className="todo-item">
                            <span
                                onClick={() => toggleCompletion(todo.id)}
                                style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none', cursor: 'pointer' }}
                            >
                                {todo.text}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="footer">
                    <p>Total: {todos.length} | Showing: {filteredTodos.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Todos;
