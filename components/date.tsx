import { parseISO, format } from "date-fns";

export default function Date(props: { dateString: string }) {
  const { dateString } = props;
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
