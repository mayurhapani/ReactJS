const initial = {
  users: [
    { name: "sam", email: "sam@gmaill.com" },
    { name: "mayur", email: "mayur@gmaill.com" },
  ],
};

const Reducer = (state = initial, action) => {
  // console.log(action);
  switch (action.type) {
    case "add":
      return { ...state, users: [...state.users, action.data] };

    case "edit":
      // console.log(action);
      // console.log(action.id);
      // console.log(state.users);
      // console.log(state.users[action.id]);
      // console.log(action.data);

      var newData = [...state.users];
      newData[action.id] = action.data;
      return { ...state, users: newData };
    // return { ...state, users: [...state.users, (state.users[action.id] = action.data)] };

    // return { ...state, users: [(state.users[action.id] = action.data)] };

    case "delete":
      return { ...state, users: [...state.users.filter((user, id) => id !== action.id)] };

    default:
      break;
  }
  return state;
};

export default Reducer;
