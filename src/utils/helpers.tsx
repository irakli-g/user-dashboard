import { User } from "../reducer/reducer";

export const emailRegex: RegExp = /^[a-z0-9\.-]+@[a-z0-9]{2,}\.[a-z]{2,5}(\.[a-z]{2,5})?$/i;
export const lettersRegex: RegExp = /^[a-z\s]+$/i;

export const pagination = (data: User[], userPerPage: number) => {
	const pages = Math.ceil(data.length / userPerPage);

	const newArray = Array.from({ length: pages }, (_, index) => {
		const start = index * userPerPage;
		return data.slice(start, start + userPerPage);
	});
	return newArray;
};
