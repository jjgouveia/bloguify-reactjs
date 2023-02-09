import http from "../config/http";

export async function fetchById (type, id, optional ='') {
    try {
        const { data } = await http.get(`/${type}/${id}/${optional}`);
        return data;
    } catch (error) {
        return error;
    };
};

