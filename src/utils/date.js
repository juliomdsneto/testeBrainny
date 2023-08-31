import { format } from 'date-fns';

export const formatDate = (d) => {
	const date = new Date(d);
	return format(date, "dd/MM/yy")
}

export const formatHour = (d) => {
	const date = new Date(d);
	return format(date, "HH:mm")

}