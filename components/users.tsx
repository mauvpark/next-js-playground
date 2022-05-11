import React from "react";
import User from "./user";
import { userType } from "../model/user";
import fetchData from "../pages/api/fetch-data";
import { userList } from "../pages/db/user-list";

// export async function getServerSideProps() {
// 	const data = await fetchData(userList, 0);
// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// }

interface usersProps {
	data?: Array<userType>;
}

const Users = ({ data }: usersProps) => {
	console.log("users rendered");
	return (
		<div>
			{data?.map((u, i) => (
				<User data={u} key={i} />
			))}
		</div>
	);
};

export default Users;
