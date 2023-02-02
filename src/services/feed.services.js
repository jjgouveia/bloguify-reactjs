import http from "../config/http";

export async function getPosts (page, pageLimit = '') {
    try {
        const { data } = await http.get(`/posts?_start=${page}&_limit=${pageLimit}`);
        return data;
    } catch (error) {
        return error;
    };
};

