import { api } from "services/config";

export const queries = {
	getLimitUsers: (limit: number) => api.get(`?results=${limit}`),
};
