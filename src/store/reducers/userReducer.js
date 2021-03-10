const initialState = {
  user: [
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
  ],
};

const userReducer = (state = initialState, action) => {
  return state;
};

export default userReducer;
