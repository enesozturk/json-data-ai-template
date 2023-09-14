export const jsonDataPrompt = (
  prompt: string,
  dataFormatPrompty: string,
  limit: number = 1
) => `${prompt}
  
  Get ${limit} amount of items.
  
  ${dataFormatPrompty}
  `;

export const jsonDataPromptDataHelper = (
  fields: {
    name: string;
    inputType: string;
    description: string;
  }[]
) => {
  let result = "";

  result += "\ndescription of the fields:\n";
  fields.map((item) => {
    result += `- ${item.name}: ${item.description}\n`;
  });

  result += "\n\nyou must return data in the following format:\n";
  const oneField = fields[0]; // {name: "", type: "", description: ""}

  fields.forEach((item, index) => {
    const islast = index === fields.length - 1;
    result += `${item.name}:example ${item.name}${islast ? "\n" : "|"}`;
  });
  fields.forEach((item, index) => {
    const islast = index === fields.length - 1;
    result += `${item.name}:example ${item.name} 2${islast ? "\n" : "|"}`;
  });
  fields.forEach((item, index) => {
    const islast = index === fields.length - 1;
    result += `${item.name}:example ${item.name} 3${islast ? "\n" : "|"}`;
  });

  result += "\n\nDon't return any other fields except the ones listed above.";

  result +=
    "\n\nI know you cannot return data in spesific dates. But don't give any other info except this format I request from you.\n";

  result += "\n\nrule for the types:\n";
  fields.map((item) => {
    result += `- ${item.name} must be ${item.inputType}\n`;
  });

  result += "\nno other fields are allowed\n";

  return result;
};
