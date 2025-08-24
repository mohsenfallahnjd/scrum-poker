import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "scrum-poker";

const nextConfig: NextConfig = {
	output: "export", // enables `next export`
	images: { unoptimized: true }, // gh-pages doesn't do Next image optimization
	assetPrefix: isProd ? `/${repo}/` : "",
	basePath: isProd ? `/${repo}` : "",
	// optional if you need clean URLs on GitHub Pages:
	trailingSlash: true,
};

export default nextConfig;
