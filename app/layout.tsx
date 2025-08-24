import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const vazir = Vazirmatn({
	variable: "--font-vazirmatn",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Scrum Poker",
	description: "Scrum Poker",
	applicationName: "Scrum Poker",
	authors: [
		{
			name: "Mohsen Fallahnejad",
			url: "https://github.com/mohsenfallahnjd",
		},
	],
	creator: "Mohsen Fallahnejad",
	publisher: "Mohsen Fallahnejad",
	formatDetection: {
		email: false,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${vazir.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
