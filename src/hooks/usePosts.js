import { useState } from "react";
import { getPosts } from "../services/feed.services";

export default function usePosts(pageLimit) {
    const [ posts, setPosts ] = useState([]);

    async function fetchPosts(page) {
        const virtualPage = ((page - 1) * pageLimit) <= 0 
        ? 0
        : ((page - 1) * pageLimit);
        
        const fetch = await getPosts(virtualPage, pageLimit);
        setPosts(fetch);
    }

    return {
        fetchPosts,
        posts,
    }
};