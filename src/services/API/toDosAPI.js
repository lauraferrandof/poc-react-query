const initialToDos = {
  1: { id: '1', isCompleted: false, title: 'Workpath onboarding' },
  2: { id: '2', isCompleted: false, title: 'Finish to-do app' },
};

export function fetchToDos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(initialToDos), 1000);
  });
}

export function addToDo({ id, title }) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, title }), 500);
  });
}

export function toggleToDo({ id, isCompleted }) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, isCompleted }), 250);
  });
}
