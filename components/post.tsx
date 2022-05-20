import React from "react";
import postType from "../model/post";

const Post = ({ post }: { post: postType }) => {
	return (
		<div>
			<h2 className="title">
				{post.title} written by: ({post.userId})
			</h2>
			<p className="description">{post.body}</p>
		</div>
	);
};

export default Post;
