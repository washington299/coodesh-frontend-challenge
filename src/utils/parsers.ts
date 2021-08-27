export const parseDate = (date: string) => {
	const day = new Date(date).getDate() + 1;
	const month = new Date(date).getMonth();
	const year = new Date(date).getFullYear();

	const event = new Date(Date.UTC(year, month, day));

	return event.toLocaleDateString("en-US");
};
