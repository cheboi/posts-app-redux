import {
  CREATE_POST_ACTION,
  DELETE_POST_ACTION,
  LIKE_POST_ACTION,
} from "../types";

const initialState = {
  posts: [],
  name: "Awesome App",
  likes: 0,
};

export const postReducer = (state = initialState, action) => {
  // if (action.type === CREATE_POST_ACTION) {
  //     return { ...state, posts: [...state.posts, action.post] };
  // } else {
  // 	 return state
  // }

  switch (action.type) {
    case CREATE_POST_ACTION:
      return { ...state, posts: [...state.posts, action.post] };
    case DELETE_POST_ACTION:
      const newPosts = state.posts.filter((post) => post.id !== action.id);
      return { ...state, posts: newPosts };
    case LIKE_POST_ACTION:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.id) {
            return {
              ...post,
              likes: post.likes + 1,
            };
          }
          return post;
        }),
        likes: state.likes + 1
      };
    default:
      return state;
  }
};
