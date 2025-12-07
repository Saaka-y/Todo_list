//@/utils/dayToString.js

import dayjs from "dayjs";

export function dayToString(date) {
  return dayjs(date).format("YYYY-MM-DD");
}

