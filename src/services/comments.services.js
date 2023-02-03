import http from "../config/http";

export async function getComments (type, id, optional ='') {
    try {
        const { data } = await http.get(`/${type}/${id}/${optional}`);
        return data;
    } catch (error) {
        return error;
    };
};

