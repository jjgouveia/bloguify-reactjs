import http from "../config/http";

export async function getPosts (type, page, pageLimit = '') {
    try {
        const { data } = await http.get(`/${type}?_start=${page}&_limit=${pageLimit}`);
        return data;
    } catch (error) {
        return error;
    };
};

