import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "scrum-poker";

const nextConfig: NextConfig = {
	output: "export",
	images: { unoptimized: true },
	assetPrefix: isProd ? `/${repo}/` : "",
	basePath: isProd ? `/${repo}` : "",
	trailingSlash: true,
};

export default nextConfig;
