export const getReadableDate = (date, short = false) => {
  const now = new Date();
  const postDate = new Date(date);

  const getMonthName = (index) =>
    [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][index];
  const olderYear = () => now.getFullYear() > postDate.getFullYear();
  const olderMonth = () => now.getMonth() > postDate.getMonth();
  const olderDay = () => now.getDate() > postDate.getDate();
  const olderHour = () => now.getHours() > postDate.getHours();
  const olderMinute = () => now.getMinutes() > postDate.getMinutes();
  const olderSecond = () => now.getSeconds() > postDate.getSeconds();
  const postDateAfterNow = () => postDate.getTime() > now.getTime();
  const getWeekCount = () =>
    Math.floor((now.getMonth() - postDate.getMonth()) * 4.3);

  if (postDateAfterNow()) {
    return date;
  } else if (olderYear()) {
    return short
      ? `${getWeekCount()}w`
      : `${getMonthName(
          postDate.getMonth()
        )} ${postDate.getDate()}, ${postDate.getFullYear()}`;
  } else if (olderMonth()) {
    return short
      ? `${getWeekCount()}w`
      : `${getMonthName(postDate.getMonth())} ${postDate.getDate()}`;
  } else if (olderDay()) {
    const diff = now.getDate() - postDate.getDate();
    return short
      ? `${diff}d`
      : `${diff} ${diff > 1 ? "days" : "day"} ago`.toUpperCase();
  } else if (olderHour()) {
    const diff = now.getHours() - postDate.getHours();
    return short
      ? `${diff}h`
      : `${diff} ${diff > 1 ? "hours" : "hour"} ago`.toUpperCase();
  } else if (olderMinute()) {
    const diff = now.getMinutes() - postDate.getMinutes();
    return short
      ? `${diff}m`
      : `${diff} ${diff > 1 ? "minutes" : "minute"} ago`.toUpperCase();
  } else if (olderSecond()) {
    return short
      ? `${now.getSeconds() - postDate.getSeconds()}s`
      : `a few seconds ago`.toUpperCase();
  }

  console.log({ now, postDate });
  return date;
};

export const formatNumber = (number) => {
  const ONE_BILLION = 1000000000;
  const ONE_MILLION = 1000000;
  const THOUSAND = 1000;
  let tag = "";
  let divideBy = 1;

  if (number >= ONE_BILLION) {
    tag = "B";
    divideBy = ONE_BILLION;
  } else if (number >= ONE_MILLION) {
    tag = "M";
    divideBy = ONE_MILLION;
  } else if (number >= THOUSAND * 20) {
    tag = "K";
    divideBy = THOUSAND;
  }

  number = (number / divideBy).toFixed(1).replace(",0", "");
  let nf = new Intl.NumberFormat("en-US");
  return nf.format(number) + tag;
};

export const applyLineBreaks = (string) =>
  string.split("\\n").map((item, i) => <p key={i}>{item}</p>);
