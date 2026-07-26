# Project Report

## 1. Project Overview

### Purpose of the project

This project is a small React-based todo application designed to help users manage daily tasks in a simple and visually polished interface. It focuses on adding, editing, deleting, and organizing tasks while also supporting theme switching and persistence across browser refreshes.

### What it does

The application allows a user to:

- Create new todos with a text body and an optional category.
- Edit an existing todo inline.
- Delete todos from the list.
- View an empty-state message when no todos exist.
- Toggle between light and dark themes.
- Preserve todos and UI preferences in browser storage.

### Main features

- Add todo items with a text input and category selector.
- Edit todo content directly from the list.
- Delete todo items with confirmation-style feedback via toasts.
- Visual category-based card styling for Work, Study, and Personal tasks.
- Dark/light mode toggle.
- Local persistence of todos, selected theme, and a UI-related state value.

---

## 2. Technologies Used

| Technology                                      | Role in the project                                                            |
| ----------------------------------------------- | ------------------------------------------------------------------------------ |
| React                                           | Core UI library for building the interface.                                    |
| React DOM                                       | Renders the React app into the browser DOM.                                    |
| Vite                                            | Development server, bundler, and build tool.                                   |
| JavaScript (ESM)                                | Primary programming language for application logic.                            |
| Tailwind CSS                                    | Utility-first styling framework for layout and design.                         |
| Tailwind Vite plugin                            | Integrates Tailwind with the Vite build pipeline.                              |
| @base-ui/react                                  | Provides the underlying primitives used by custom input and button components. |
| class-variance-authority                        | Helps define reusable UI variant classes for buttons.                          |
| clsx                                            | Combines class names conditionally.                                            |
| tailwind-merge                                  | Merges conflicting Tailwind classes cleanly.                                   |
| react-hot-toast                                 | Displays success notifications for add/delete actions.                         |
| react-router                                    | Declared as a dependency but not actively used in the current implementation.  |
| @hugeicons/react and @hugeicons/core-free-icons | Icon components and icon assets for the interface.                             |
| @fontsource-variable/inter                      | Loads the Inter font used in styling.                                          |
| ESLint                                          | Linting and code quality checks.                                               |
| Babel / React Compiler                          | Enabled through Vite and Babel configuration for React compiler support.       |

---

## 3. Folder Structure

### Root-level files

- [package.json](package.json): Defines dependencies, scripts, and package metadata.
- [vite.config.js](vite.config.js): Configures Vite, Tailwind, React, and import aliases.
- [jsconfig.json](jsconfig.json): Configures path aliases such as @/\*.
- [components.json](components.json): Shadcn-style component configuration metadata.
- [index.html](index.html): Main HTML entry point for the app.
- [README.md](README.md): Default template documentation.
- [pnpm-lock.yaml](pnpm-lock.yaml): Lockfile for pnpm dependencies.

### src/

The main source directory for the application.

- [src/App.jsx](src/App.jsx): Top-level app component that mounts the layout and toast container.
- [src/main.jsx](src/main.jsx): Application bootstrap point.
- [src/index.css](src/index.css): Global styling and Tailwind theme variables.
- [src/App.css](src/App.css): Additional stylesheet content (template-style styles).

### src/assets/

Contains static assets used by the app. In this project it is present but currently does not appear to contain custom application assets beyond the default structure.

### src/components/

Holds reusable presentation-level UI components.

- [src/components/TodoEmpty.jsx](src/components/TodoEmpty.jsx): Empty-state UI shown when there are no todos.
- [src/components/ui/](src/components/ui): Shared UI primitives used across the app.

### src/components/ui/

Contains reusable UI elements.

- [src/components/ui/button.jsx](src/components/ui/button.jsx): Button wrapper component.
- [src/components/ui/card.jsx](src/components/ui/card.jsx): Card container component.
- [src/components/ui/input.jsx](src/components/ui/input.jsx): Input wrapper component.
- [src/components/ui/TodoItem.jsx](src/components/ui/TodoItem.jsx): Individual todo card component.
- [src/components/ui/TodoToggle.jsx](src/components/ui/TodoToggle.jsx): Theme toggle button.

### src/context/

Contains state-management infrastructure.

- [src/context/TodoContext.jsx](src/context/TodoContext.jsx): React context definition.
- [src/context/TodoProvider.jsx](src/context/TodoProvider.jsx): Context provider with state and persistence logic.
- [src/context/reducer.jsx](src/context/reducer.jsx): Reducer logic and initial state definition.

### src/layout/

Contains layout-level wrappers.

- [src/layout/DefaultLayout.jsx](src/layout/DefaultLayout.jsx): The main layout that composes the navbar, form, and list.

### src/lib/

Utility helpers.

- [src/lib/utils.js](src/lib/utils.js): Helper function for combining classes.

### src/page/

Contains feature-level page components.

- [src/page/Navbar.jsx](src/page/Navbar.jsx): Header section.
- [src/page/TodoForm.jsx](src/page/TodoForm.jsx): Task creation form.
- [src/page/TodoList.jsx](src/page/TodoList.jsx): Renders the list of todos or empty state.

### public/

Static public assets exposed by Vite, such as icons and the favicon.

---

## 4. File Documentation

### Root application files

#### [src/App.jsx](src/App.jsx)

- Purpose: Acts as the top-level app shell.
- Responsibilities: Wraps the layout with the toaster notification container and a footer attribution line.
- Main components: [src/layout/DefaultLayout.jsx](src/layout/DefaultLayout.jsx).
- Props: None.
- Hooks used: None.
- Context usage: None directly.
- Reducer usage: None directly.

#### [src/main.jsx](src/main.jsx)

- Purpose: Bootstraps the React app.
- Responsibilities: Creates the root React node and wraps the application in [src/context/TodoProvider.jsx](src/context/TodoProvider.jsx).
- Main components: [src/App.jsx](src/App.jsx).
- Props: None.
- Hooks used: None.
- Context usage: None directly.
- Reducer usage: None directly.

### Context and state management

#### [src/context/TodoContext.jsx](src/context/TodoContext.jsx)

- Purpose: Defines the shared React context used by the app.
- Responsibilities: Exposes the context object to all consumers.
- Main functions/components: Exports TodoContext.
- Props: None.
- Hooks used: None.
- Context usage: Provides the shared state and dispatch to components.
- Reducer usage: None directly.

#### [src/context/TodoProvider.jsx](src/context/TodoProvider.jsx)

- Purpose: Provides the global application state to the component tree.
- Responsibilities: Initializes the reducer state, exposes state and dispatch through context, and writes changes to local storage.
- Main functions/components: TodoProvider.
- Props: children.
- Hooks used: useReducer, useEffect.
- Context usage: Uses TodoContext.Provider to pass state and dispatch.
- Reducer usage: Uses the reducer and initialState from [src/context/reducer.jsx](src/context/reducer.jsx).

#### [src/context/reducer.jsx](src/context/reducer.jsx)

- Purpose: Holds the reducer logic and initial state definition.
- Responsibilities: Defines the default data structure, handles all state-changing actions, and updates the todo list and theme state.
- Main functions/components: initialState, reducer.
- Props: None.
- Hooks used: None.
- Context usage: No direct context usage.
- Reducer usage: Central reducer for all state transitions.

### Layout and page components

#### [src/layout/DefaultLayout.jsx](src/layout/DefaultLayout.jsx)

- Purpose: Provides the general application layout.
- Responsibilities: Applies the dark-mode class to the document root based on state and composes the navbar, todo form, and todo list in a card-based layout.
- Main functions/components: DefaultLayout.
- Props: None.
- Hooks used: useEffect, useContext.
- Context usage: Reads state.theme from TodoContext.
- Reducer usage: None directly.

#### [src/page/Navbar.jsx](src/page/Navbar.jsx)

- Purpose: Displays the app header.
- Responsibilities: Shows the app title and subtitle, and hosts the theme toggle UI.
- Main functions/components: Navbar.
- Props: None.
- Hooks used: useState.
- Context usage: None directly.
- Reducer usage: None directly; it relies on the theme toggle child component.

#### [src/page/TodoForm.jsx](src/page/TodoForm.jsx)

- Purpose: Collects user input for creating a new todo.
- Responsibilities: Handles input state, category selection, validation, dispatching an ADD_TODO action, and showing a success toast.
- Main functions/components: TodoForm.
- Props: None.
- Hooks used: useState, useContext.
- Context usage: Uses dispatch from TodoContext.
- Reducer usage: Dispatches ADD_TODO.

#### [src/page/TodoList.jsx](src/page/TodoList.jsx)

- Purpose: Renders the list of todos.
- Responsibilities: Displays either the empty-state component or a list of todo items based on the current todos array.
- Main functions/components: TodoList.
- Props: None.
- Hooks used: useContext.
- Context usage: Reads state.todos from TodoContext.
- Reducer usage: None directly.

### Presentational components

#### [src/components/TodoEmpty.jsx](src/components/TodoEmpty.jsx)

- Purpose: Shows a friendly empty-state message when there are no tasks.
- Responsibilities: Provides visual feedback for an empty list.
- Main functions/components: TodoEmpty.
- Props: None.
- Hooks used: None.
- Context usage: None.
- Reducer usage: None.

#### [src/components/ui/TodoItem.jsx](src/components/ui/TodoItem.jsx)

- Purpose: Represents one task in the todo list.
- Responsibilities: Displays the todo text, supports inline editing, and handles delete and save actions.
- Main functions/components: TodoItem.
- Props: todo.
- Hooks used: useContext, useState.
- Context usage: Uses dispatch from TodoContext.
- Reducer usage: Dispatches UPDATE_TODO and DELETE_TODO.

#### [src/components/ui/TodoToggle.jsx](src/components/ui/TodoToggle.jsx)

- Purpose: Switches the app theme.
- Responsibilities: Renders the theme toggle button and dispatches TOGGLE_THEME.
- Main functions/components: ThemeToggle.
- Props: None.
- Hooks used: useContext.
- Context usage: Reads state.theme and dispatch from TodoContext.
- Reducer usage: Dispatches TOGGLE_THEME.

#### [src/components/ui/button.jsx](src/components/ui/button.jsx)

- Purpose: Reusable button abstraction.
- Responsibilities: Wraps the Base UI button primitive and applies consistent styling variants.
- Main functions/components: Button, buttonVariants.
- Props: className, variant, size, and all native button props.
- Hooks used: None.
- Context usage: None.
- Reducer usage: None.

#### [src/components/ui/card.jsx](src/components/ui/card.jsx)

- Purpose: Reusable layout container component.
- Responsibilities: Provides a styled card shell for content blocks.
- Main functions/components: Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter.
- Props: className, size, and generic HTML props.
- Hooks used: None.
- Context usage: None.
- Reducer usage: None.

#### [src/components/ui/input.jsx](src/components/ui/input.jsx)

- Purpose: Reusable input abstraction.
- Responsibilities: Wraps the Base UI input primitive with a consistent Tailwind-based style.
- Main functions/components: Input.
- Props: className, type, and standard input props.
- Hooks used: None.
- Context usage: None.
- Reducer usage: None.

### Utility files

#### [src/lib/utils.js](src/lib/utils.js)

- Purpose: Provides a class-name helper for combining Tailwind classes.
- Responsibilities: Merges conditional class names into a single string.
- Main functions/components: cn.
- Props: None.
- Hooks used: None.
- Context usage: None.
- Reducer usage: None.

### Styling files

#### [src/index.css](src/index.css)

- Purpose: Defines the global Tailwind theme, dark-mode variables, and base styles.
- Responsibilities: Sets the design tokens used by the app and enables Tailwind-based styling.
- Main functions/components: None.
- Props: None.
- Hooks used: None.
- Context usage: None.
- Reducer usage: None.

#### [src/App.css](src/App.css)

- Purpose: Additional stylesheet content.
- Responsibilities: Contains legacy or template-style CSS rules that are not central to the app flow.
- Main functions/components: None.
- Props: None.
- Hooks used: None.
- Context usage: None.
- Reducer usage: None.

---

## 5. Application Flow

1. The application starts in [src/main.jsx](src/main.jsx), which mounts the React app into the root element.
2. [src/context/TodoProvider.jsx](src/context/TodoProvider.jsx) initializes state with the reducer and provides it through [src/context/TodoContext.jsx](src/context/TodoContext.jsx).
3. [src/App.jsx](src/App.jsx) renders [src/layout/DefaultLayout.jsx](src/layout/DefaultLayout.jsx), which composes the navbar, todo form, and todo list.
4. The user enters a task in [src/page/TodoForm.jsx](src/page/TodoForm.jsx), selects a category, and clicks add.
5. The form dispatches an ADD_TODO action to the reducer.
6. The reducer updates the todos array in state.
7. The provider re-renders the app and the list updates immediately.
8. The provider also writes the latest todos, theme, and state values to local storage through useEffect hooks.
9. On refresh, the initial state is reconstructed from local storage, so previously saved data is restored.

---

## 6. State Management

### Context API

The app uses React Context to avoid passing props deeply through the component tree. The shared context is created in [src/context/TodoContext.jsx](src/context/TodoContext.jsx) and consumed by the layout, form, list, and UI components.

### TodoProvider

[src/context/TodoProvider.jsx](src/context/TodoProvider.jsx) is the central state container. It:

- Creates the reducer-based state using useReducer.
- Supplies state and dispatch through the context provider.
- Persists state to local storage whenever relevant values change.

### useReducer

The app uses useReducer to manage state transitions in a centralized manner. This keeps update logic in one place instead of scattering state changes across components.

### initialState

The initial state is defined in [src/context/reducer.jsx](src/context/reducer.jsx) as:

```js
export const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  theme: localStorage.getItem("theme") || "light",
  state: localStorage.getItem("state") || "",
};
```

### reducer

The reducer handles state transitions based on action types. It returns a new state object for each recognized action.

### dispatch

Dispatch is exposed through the context and used by the form and todo item components to trigger state updates.

### Reducer actions

| Action         | What it does                                                                           |
| -------------- | -------------------------------------------------------------------------------------- |
| ADD_TODO       | Appends a new todo object to the todos array.                                          |
| DELETE_TODO    | Removes the todo whose id matches the payload.                                         |
| UPDATE_TODO    | Finds the matching todo and updates its text.                                          |
| TOGGLE_THEME   | Toggles the theme between light and dark.                                              |
| WORK_THEME     | Defined in the reducer but appears to be incomplete and is not used by the current UI. |
| STUDY_THEME    | Defined in the reducer but appears to be incomplete and is not used by the current UI. |
| PERSONAL_THEME | Defined in the reducer but appears to be incomplete and is not used by the current UI. |

### Notes on reducer behavior

The reducer is simple and effective for a small app, but the action names related to category-based theme state are not clearly wired into the current UI. They do not appear to drive visible behavior in the present implementation.

---

## 7. Local Storage

### How todos are stored

Todos are stored in the browser’s localStorage under the key todos. The value is saved as a JSON string whenever the todos array changes.

### How theme is stored

The current theme is stored in localStorage under the key theme. It is saved whenever state.theme changes.

### How the extra state value is stored

A third value, stored under the key state, is also persisted. In the current implementation this value is used as a generic string field in state and does not appear to be actively used to drive visible UI behavior.

### When data is saved

The provider uses useEffect hooks to save data whenever:

- state.todos changes
- state.theme changes
- state.state changes

### When data is loaded

The initial state is loaded when the reducer module is initialized. The values are read from localStorage during state initialization, which allows the app to restore prior data after a refresh.

---

## 8. UI Components

| Component                                                            | Responsibility                                                                             |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [src/components/ui/button.jsx](src/components/ui/button.jsx)         | Reusable button with variants like default, outline, destructive, and custom Edit styling. |
| [src/components/ui/card.jsx](src/components/ui/card.jsx)             | Provides a card container for the app shell and todo items.                                |
| [src/components/ui/input.jsx](src/components/ui/input.jsx)           | Reusable styled input control for todo text and editing.                                   |
| [src/components/ui/TodoItem.jsx](src/components/ui/TodoItem.jsx)     | Renders one todo entry and handles editing and deletion.                                   |
| [src/components/ui/TodoToggle.jsx](src/components/ui/TodoToggle.jsx) | Toggles theme with a button.                                                               |
| [src/components/TodoEmpty.jsx](src/components/TodoEmpty.jsx)         | Shows the empty-state message.                                                             |
| [src/page/Navbar.jsx](src/page/Navbar.jsx)                           | Displays the header and app title.                                                         |
| [src/page/TodoForm.jsx](src/page/TodoForm.jsx)                       | Accepts new todo creation input.                                                           |
| [src/page/TodoList.jsx](src/page/TodoList.jsx)                       | Responsible for rendering the todo collection.                                             |

---

## 9. Features

### Implemented features

- Task creation
- Inline task editing
- Task deletion
- Category selection while creating tasks
- Category-based visual styling on the task card
- Empty state when no tasks are present
- Light/dark theme toggle
- Persistence through local storage
- Toast notifications for task add/delete success

### Feature notes

The category system currently affects styling and the selected value in the form. It does not appear to be used for filtering, sorting, or grouping beyond color differentiation.

---

## 10. Data Models

### Todo object

Each task is represented as a simple object with the following shape:

```js
{
  id: number,
  text: string,
  category: string
}
```

### Application state object

The global state object contains three properties:

```js
{
  todos: Array,
  theme: string,
  state: string
}
```

### Theme value

The theme value is expected to be either light or dark.

### Category values

The UI currently supports these category values:

- Work
- Study
- Personal

---

## 11. Dependencies

| Dependency                                    | Why it exists                                       |
| --------------------------------------------- | --------------------------------------------------- |
| react                                         | Core rendering library.                             |
| react-dom                                     | DOM rendering for React.                            |
| vite                                          | Fast local development and production build.        |
| @vitejs/plugin-react                          | Enables React integration in Vite.                  |
| @rolldown/plugin-babel                        | Adds Babel support for the build pipeline.          |
| tailwindcss                                   | Styling framework for the UI.                       |
| @tailwindcss/vite                             | Tailwind integration with Vite.                     |
| @base-ui/react                                | Supplies input and button primitives.               |
| class-variance-authority                      | Supports reusable button variants.                  |
| clsx                                          | Combines class names.                               |
| tailwind-merge                                | Prevents duplicate or conflicting Tailwind classes. |
| react-hot-toast                               | Shows transient success feedback.                   |
| @hugeicons/react / @hugeicons/core-free-icons | Icon components used in the UI.                     |
| @fontsource-variable/inter                    | Provides the Inter font family.                     |
| eslint packages                               | Help maintain code quality and linting compliance.  |

---

## 12. Architecture

The application follows a simple provider-based architecture:

- [src/main.jsx](src/main.jsx) initializes the app.
- [src/context/TodoProvider.jsx](src/context/TodoProvider.jsx) acts as the state container.
- [src/context/TodoContext.jsx](src/context/TodoContext.jsx) exposes the shared state to consumers.
- Presentational components consume the context and dispatch actions.
- The reducer centralizes state updates for todo and theme handling.
- Local storage acts as the persistence layer between sessions.

The architecture is intentionally lightweight and easy to follow for a small-scale app. It is a good fit for a learning project or a moderate-size personal task tracker.

---

## 13. Code Quality Review

### Structure

The project has a clear separation between:

- app entry points,
- state management,
- layout,
- page-level components,
- reusable UI elements.

This makes the app easy to navigate for a small codebase.

### Readability

The code is generally readable and uses straightforward component names. The flow from form submission to state update and re-render is easy to trace.

### Maintainability

The reducer pattern improves maintainability because state changes are centralized. However, some naming and conventions could be clearer, especially around the state field named state and the reducer actions related to theme categories.

### Best practices

The project uses:

- Context for shared state
- Reducer-based updates
- Local persistence
- A reusable component abstraction layer

These are solid practices for a React app of this size.

### Possible future improvements

- Replace the ambiguous state property with a clearer name such as categoryTheme or selectedCategoryState.
- Add proper action constants instead of string literals.
- Introduce TypeScript for stronger safety and clearer data models.
- Add tests for reducer behavior and UI interactions.
- Add filtering, completion toggles, due dates, and priority levels.
- Improve error handling around localStorage access and JSON parsing.
- Refactor the reducer logic to make the theme and category-related actions more explicit and consistent.

---

## 14. Conclusion

This project is a compact React todo application with a modern UI, clear component structure, and centralized state management. It successfully demonstrates core React concepts such as components, context, reducers, hooks, and local persistence. The app is easy to understand and extend, and it provides a strong foundation for adding more todo features in the future. Although there are a few inconsistencies in the reducer and state naming, the overall design is simple, approachable, and well-suited for a small personal productivity app.
