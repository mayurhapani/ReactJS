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
      // var newData = [...state.users];
      // newData[action.id] = action.data;
      // return { ...state, users: newData };

      return { ...state, users: [...state.users.slice(0, action.id), action.data, ...state.users.slice(action.id + 1)] };

    case "delete":
      return { ...state, users: [...state.users.filter((user, id) => id !== action.id)] };

    default:
      break;
  }
  return state;
};

export default Reducer;
