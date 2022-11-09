import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePostAction, likePostAction } from "../redux/actions/postActions";

const PostsList = () => {
  const { posts } = useSelector((state) => state.postState);
  const dispatch = useDispatch();

  const handleDeletePost = (id) => {
    dispatch(deletePostAction(id));
  };

  const handleLikesPost = (id) => {
    dispatch(likePostAction(id));
  };

  return (
    <div className="bg-white max-w-2xl mx-auto my-10 p-6 rounded-lg">
      {posts?.map((post) => (
        <div className="flex border-b gap-4 mt-3 pb-2">
          <div className="flex-1">
            <h2 className="font-bold mb-2">{post?.title}</h2>
            <p>{post?.post}</p>
          </div>
          <div className="flex flex-col gap-2">
            <button
              className="bg-green-400 text-white rounded-lg p-1"
              onClick={() => handleLikesPost(post?.id)}
            >
              Like {post?.likes}
            </button>
            <button
              onClick={() => handleDeletePost(post?.id)}
              className="bg-red-400 text-white rounded-lg p-1"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
