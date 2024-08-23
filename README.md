# TOPIC : Mocking a  React reconciler in Vanilla Javascript

This implementation demonstrates a solid understanding of how reconciliation might work on a basic level. I've created a simple "reconciler" that re-renders the list of tasks (todos) whenever a task is added or deleted. Here's a breakdown of how your logic aligns with the concept of reconciliation:

1. State Management (todos array): You're managing the state of the tasks in an array called todos. This array represents the current state of your application.

2. Re-rendering (render() function): The render() function clears the existing DOM (#todos element) and re-renders the entire list based on the current state (todos array). This is a simple form of reconciliation where you rebuild the entire UI every time there's a change.

3. Component Representation (divComponent() function): You're breaking down your UI into smaller components (divComponent) that represent individual tasks. This is similar to how React components work.

4. Handling Updates (addTask() and deleteTask() functions): You update the state by adding or deleting tasks and then call render() to reflect those changes in the DOM.

## Conclusion
This mock reconciler effectively illustrates the concept of rendering UI based on state changes. It's a great starting point for understanding reconciliation.