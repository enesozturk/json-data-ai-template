export const parseResponse = (input: string, intKeys?: string[]) => {
  // Split the input into an array of lines
  const lines = input.split("\n") || [];

  // Iterate over each line
  const objects = lines.map((line, index) => {
    const pairs = line.split("|");

    if (pairs.length < 1 || pairs?.[0] === "") {
      return null;
    }

    const obj = {};
    pairs.forEach((pair) => {
      const [key, value] = pair.split(":");
      if (!key || !value) {
        return [];
      }

      if (intKeys?.includes(key.trim())) {
        // @ts-ignore
        obj[key.trim()] = parseInt(value.trim());
      } else {
        // @ts-ignore
        obj[key.trim()] = value.trim(); // remove double quotes from value
      }
    });
    return obj;
  });

  // Return the array of parsed objects
  return objects.filter((obj) => obj !== null);
};

export function stringifyResponse(objects: any): string {
  return objects
    .map((obj: any) => {
      const { uid, ...rest } = obj;
      return Object.entries(rest)
        .filter(
          ([key, _]) =>
            key !== "index" && key !== "uid" && key !== "reason" && key !== "id"
        )
        .map(([key, value]) => `${key}:${value}`)
        .join("|");
    })
    .join("\n");
}
