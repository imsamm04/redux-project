const initialState = {
  todo: [
    {
      id: 1,
      title: "viec 1",
      completed: false,
    },
    {
      id: 2,
      title: "viec 2",
      completed: false,
    },
    {
      id: 3,
      title: "viec 3",
      completed: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  return state
};

export default todoReducer;
