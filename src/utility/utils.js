export const calculateDate = (followDate) => {
  followDate = followDate.substring(0, 10);
  followDate = new Date(followDate);
  let d = new Date();
  let diff = new Date(d - Date.parse(followDate)) / 86400000;
  diff = Math.trunc(diff);
  return diff;
};
