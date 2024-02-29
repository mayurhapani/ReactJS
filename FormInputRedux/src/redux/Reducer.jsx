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
      console.log("edited");
      break;

    case "delete":
      return { ...state, users: [...state.users.filter((user, id) => id !== action.id)] };

    default:
      break;
  }
  return state;
};

export default Reducer;
