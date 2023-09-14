export const replaceMailPostfix = (email: string | undefined) => {
  if (!email) return email;

  const mailPostfix = /@.*/;
  return email.replace(mailPostfix, "");
};
