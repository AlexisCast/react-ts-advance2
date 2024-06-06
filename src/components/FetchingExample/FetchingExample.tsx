import { ReactNode, useEffect, useState } from "react";

import BlogPosts, { BlogPost } from "../BlogPosts";

import { get } from "../../utils/http";

import fetchingImg from "../../assets/data-fetching.png";

import "./FetchingExample.css";

type RawDataBlogPost = {
	id: number;
	userId: string;
	title: string;
	body: string;
};

const FetchingExample = () => {
	const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

	useEffect(() => {
		const fetchPosts = async () => {
			const data = (await get(
				"https://jsonplaceholder.typicode.com/posts"
			)) as RawDataBlogPost[];

			const blogPosts: BlogPost[] = data.map((rawPost) => {
				return {
					id: rawPost.id,
					title: rawPost.title,
					text: rawPost.body,
				};
			});

			setFetchedPosts(blogPosts);
		};

		fetchPosts();
	}, []);

	let content: ReactNode;

	if (fetchedPosts) {
		content = <BlogPosts posts={fetchedPosts} />;
	}
	return (
		<main>
			<img src={fetchingImg} alt="data fetching img" />
			{content}
		</main>
	);
};

export default FetchingExample;
