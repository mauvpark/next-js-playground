import React from "react";
import { userType } from "../model/user";

const User = ({ data }: { data: userType }) => {
	return (
		<div>
			<h2>{data.username}</h2>
			<p>{data.website}</p>
		</div>
	);
};

export default User;
