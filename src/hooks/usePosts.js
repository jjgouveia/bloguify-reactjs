import { useState } from "react";
import { getPosts } from "../services/feed.services";

export default function usePosts(type, pageLimit) {
    const [ posts, setPosts ] = useState([]);
    const [ total, setTotal ] = useState(0);

    async function fetchPosts(page) {
        const virtualPage = ((page - 1) * pageLimit) <= 0 
        ? 0
        : ((page - 1) * pageLimit);
        
        setTotal(await getPosts(type, 0));
        const fetch = await getPosts(type, virtualPage, pageLimit);
        setPosts(fetch);
    }

    return {
        fetchPosts,
        posts,
        total,
    }
};