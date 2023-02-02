import http from "../config/http";

export async function getComments (id) {
    try {
        const { data } = await http.get(`/posts/${id}/comments`);
        return data;
    } catch (error) {
        return error;
    };
};

