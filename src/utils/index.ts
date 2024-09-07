import { fromIni } from "@aws-sdk/credential-provider-ini";

export const generateRandomId = (length: number = 16): string =>
  Array.from({ length }, () => Math.random().toString(36).charAt(2)).join("");

export const generateProductId = (): string =>
  "ARL-" + Date.now().toString().slice(-5);

export const dynamoConfig = (): object => {
  console.log(process.env.ENVIRONMENT);
  if (process.env.ENVIRONMENT === "local") {
    return {
      region: "us-east-1",
      credentials: fromIni({ profile: process.env.PROFILE }),
    };
  }

  return {};
};
