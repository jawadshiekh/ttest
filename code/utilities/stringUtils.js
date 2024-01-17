const parseStringToObject = (inputString) => {
  const groups = inputString.split(";").filter(Boolean);
  const result = {};

  groups.forEach((group) => {
    const [key, value] = group.split(":");
    result[key.trim()] = value
      .trim()
      .split("-")
      .filter(Boolean)
      .map((i) => i.trim());
  });

  return result;
};

module.exports = { parseStringToObject };
