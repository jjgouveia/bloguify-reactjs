import { useState } from "react";
import { getPosts } from "../services/feed.services";

export default function usePosts(pageLimit) {
    const [ posts, setPosts ] = useState([]);
    const [ total, setTotal ] = useState(0);

    async function fetchPosts(page) {
        const virtualPage = ((page - 1) * pageLimit) <= 0 
        ? 0
        : ((page - 1) * pageLimit);
        
        setTotal(await getPosts(0));
        const fetch = await getPosts(virtualPage, pageLimit);
        setPosts(fetch);
    }

    return {
        fetchPosts,
        posts,
        total,
    }
};