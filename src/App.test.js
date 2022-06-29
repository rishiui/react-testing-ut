import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoList from './App'

describe('Tests for Todo App', () => {
  // Write tests for Todo App
  // Add and  Delete Todo
  it("Test case for the Todo App's presence on screen load", () => {
    render(<TodoList />)
    // check for presence of input element
    expect(screen.getByPlaceholderText(/new todo/i)).toBeInTheDocument()
    // check for presence of create button
    expect(screen.getByRole('button', { name: /create/i })).toBeInTheDocument()
    // check for presence of 0 todos
    expect(screen.getByText(/0 todos/i)).toBeInTheDocument()
    // check for presence of div
    expect(screen.getByText(/create a new todo/i)).toBeInTheDocument()
  })

  it('Test case for adding a new Todo', () => {
    render(<TodoList />)
    //  check for input element and store it
    const input = screen.getByPlaceholderText(/New Todo/i)
    // type a new todo
    userEvent.type(input, 'get a haircut')
    // click the button to create a new todo
    const createButton = screen.getByRole('button', { name: /create/i })
    userEvent.click(createButton)
    // expect entered text to be in the webpage
    expect(screen.getByText(/get a haircut/i)).toBeInTheDocument()
    // expect a corresponding delete button to be present in the webpage
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument()
    // check for the updates number of todos
    expect(screen.getByText(/1 todos/i)).toBeInTheDocument()
  }),
    it('Test case for adding and deleting a todo', () => {
      // repeat creation of a new todo as per prev test case
      render(<TodoList />)
      const input = screen.getByPlaceholderText(/New Todo/i)
      userEvent.type(input, 'get a haircut')
      const createButton = screen.getByRole('button', { name: /create/i })
      userEvent.click(createButton)
      expect(screen.getByText(/get a haircut/i)).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /delete/i })
      ).toBeInTheDocument()
      expect(screen.getByText(/1 todos/i)).toBeInTheDocument()

      // deleting the created todo

      const deleteTodo = screen.getByRole('button', { name: /delete/i })
      userEvent.click(deleteTodo)

      // checking if '0 todos' is present in the weboage after deleting todo
      expect(screen.getByText(/0 todos/i)).toBeInTheDocument()
    })
})
