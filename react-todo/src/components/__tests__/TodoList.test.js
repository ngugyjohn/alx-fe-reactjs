import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText(/todo list/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/add a new todo/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), {
    target: { value: 'Write tests' },
  });
  fireEvent.click(screen.getByText(/add todo/i));
  expect(screen.getByText(/write tests/i)).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText(/learn react/i);
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todo);
  expect(todo).not.toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText(/delete/i));
  expect(screen.queryByText(/learn react/i)).not.toBeInTheDocument();
});
