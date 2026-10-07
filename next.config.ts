import type { NextConfig } from 'next';
import { basePath } from './lib/site';
const config: NextConfig = { output: 'export', basePath, distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next', images: { unoptimized: true }, trailingSlash: true };
export default config;
