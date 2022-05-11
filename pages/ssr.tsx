import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Page from "../components/page";
import Post from "../components/post";
import { navigateHandler } from "../lib/click-handler";
import postType from "../model/post";
import { userType } from "../model/user";
import fetchData from "./api/fetch-data";
import { posts } from "./db/posts";
import { userList } from "./db/user-list";
import Users from "../components/users";

interface ssrProps {
	postsData: Array<postType>;
	usersData: Array<userType>;
}

export async function getServerSideProps() {
	const res = await Promise.all([
		fetchData(posts, 0),
		fetchData(userList, 0),
	]);
	return {
		props: {
			postsData: res[0],
			usersData: res[1],
		},
	};
}

const Ssr = ({ postsData, usersData }: ssrProps) => {
	const router = useRouter();
	const [postsLength, setPostsLength] = useState(0);
	const [usersLength, setUsersLength] = useState(0);

	useEffect(() => {
		setPostsLength(postsData.length);
	}, [postsData.length]);

	useEffect(() => {
		setUsersLength(usersData.length);
	}, [usersData.length]);

	console.log("page rendered");

	return (
		<Page>
			<Head>
				<title>SSR Test Page</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<h1 onClick={() => navigateHandler(router, "/")}>
				Users({usersLength})
			</h1>
			<Users data={usersData} />
			<h1 onClick={() => navigateHandler(router, "/")}>
				Posts({postsLength})
			</h1>
			{postsData?.map((p, i) => (
				<Post post={p} key={i} />
			))}
			<Footer />
		</Page>
	);
};

export default Ssr;
