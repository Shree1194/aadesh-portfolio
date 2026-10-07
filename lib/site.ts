export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/aadesh-portfolio';
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shree1194.github.io/aadesh-portfolio').replace(/\/$/, '');
export const assetUrl = (path: string) => `${basePath}${path}`;
