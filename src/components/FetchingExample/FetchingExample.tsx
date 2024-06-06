import { ReactNode, useEffect, useState } from "react";

import BlogPosts, { BlogPost } from "../BlogPosts";

import { get } from "../../utils/http";

import fetchingImg from "../../assets/data-fetching.png";

import "./FetchingExample.css";
import ErrorMessage from "../ErrorMessage";

type RawDataBlogPost = {
	id: number;
	userId: string;
	title: string;
	body: string;
};

const FetchingExample = () => {
	const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState<string>();

	useEffect(() => {
		const fetchPosts = async () => {
			setIsFetching(true);
			try {
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
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				}
				// setError("Failed to fetch posts!");
			}
			setIsFetching(false);
		};

		fetchPosts();
	}, []);

	let content: ReactNode;

	if (error) {
		content = <ErrorMessage text={error} />;
	}

	if (fetchedPosts) {
		content = <BlogPosts posts={fetchedPosts} />;
	}
	if (isFetching) {
		content = <p id="loading-fallback">Fetching posts...</p>;
	}

	return (
		<main>
			<img src={fetchingImg} alt="data fetching img" />
			{content}
		</main>
	);
};

export default FetchingExample;
