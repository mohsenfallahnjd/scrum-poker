"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

interface CardContentProps {
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

interface CardValue {
	src: string;
	alt: string;
	per: string;
}

const cardValues: CardValue[] = [
	{
		src: "planning poker_Low hanging fruit.svg",
		alt: "1. Low hanging fruit",
		per: "راحت ترین مجموعه ای از وظایف، اقدامات، اهداف و غیره.",
	},
	{
		src: "planning poker_Piece of cake.svg",
		alt: "2. Piece of cake",
		per: "تسکی که به راحتی می توان انجام داد.",
	},
	{
		src: "planning poker_It ain't rocket science.svg",
		alt: "3. It ain't rocket science",
		per: "کنایه از این است که کار سختی نمی تواند باشد.",
	},
	{
		src: "planning poker-Ornitorinco.svg",
		alt: "5. Ornitorinco (Platypus). Just because it rhymes with Cinco in Spanish",
		per: "به دلیل هم آوا بودن کلمه اورنی تورنگ یا پلاتیپوس به اسپانیایی با کلمه ی پنج به اسپانیایی اسم این کارت را اورنی تورنگ نام گذاری کرده اند. (سینکو - اورنی تورینکو)",
	},
	{
		src: "planning poker_An arm and a leg.svg",
		alt: "8. An arm and a leg",
		per: "کنایه از کاری که زمان بر است و هزینه ی زیادی از نظر زمانی دارد.",
	},
	{
		src: "planning poker_Squeaking by.svg",
		alt: "13. Just squeaking by",
		per: "بر آمدن از عهده‌ی انجام این کار با مشقت های فراوانی همراه است.",
	},
	{
		src: "planning poker_Don't put all .svg",
		alt: "20. Don’t put all your eggs in one basket",
		per: "همه ی تخم مرغ های خود را در یک سبد نگذارید یعنی برای به نتیجه رسیدن این کار نباید ریسک کرد.",
	},
	{
		src: "planning poker_Meterse en un berenjenal.svg",
		alt: "40. Meterse en un berenjenal (To step into an aubergine field. In other words to find yourself in a pickle. Why is it always vegetables, by the way?)",
		per: 'این یک اصطلاح اسپانیایی است به معنی "غوطه ور شدن در ترشی بادمجان". اصطلاحا به معنای در دردسر عظیم افتادن و با مشکل مواجه شدن است.',
	},
	{
		src: "planning poker_Monster task.svg",
		alt: "100. Monster task (Oh, the poor unicorn is so scared!)",
		per: "تسک هیولا. تسکی که باید به ساب تسک های کوچک تر تقسیم شود.",
	},
	{
		src: "planning poker_When pigs fly.svg",
		alt: "infinity. When pigs fly (Wouldn’t that be awesome?)",
		per: "کنایه ازین که هرگز این کار نمی تواند انجام شود یا بی نهایت زمان می برد.",
	},
	{
		src: "planning poker_Here be dragons.svg",
		alt: "?. Here be dragons",
		per: "“منطقه ی اژدها” به معنی مناطق خطرناک یا ناشناخته است، به تقلید از یک عمل قرون وسطایی که تصاویر اژدها، هیولا های دریایی و دیگر موجودات اساطیری را در مناطق نامشخصِ نقشه ها، که در آن خطرات احتمالی وجود داشته، قرار می دادند.",
	},
	{
		src: "planning poker_Coffee break.svg",
		alt: "Ping Pong. Coffee break card",
		per: "به این معنا که من نیاز به یک استراحت دارم، و برای بقیه تیم هم قهوه درست می کنم.",
	},
	{
		src: "planning poker_Eat a brownie.svg",
		alt: "Brownie. This is our own literal translation of the word Marrón in Spanish. Basically this means that you’re stuck with a difficult or unpleasant task. This card doesn’t really apply to standard planning poker. But hey, it’s more fun this way :)",
		per: "براونی: این ترجمه ی شرکت سازنده ی کارت از کلمه Marrón در اسپانیایی است. اساسا بدان معنی است که شما در یک کار دشوار یا ناخوشایند گیر کرده اید. این کارت در واقع در پلنینگ پوکر استاندارد نیست. اما به گفته ی سازنده بودنش در کنار بقیه ی کارت ها خالی از لطف نیست.",
	},
	{
		src: "planning poker_Yak Shaving.svg",
		alt: "Yak shaving. Because, you know, it happens to the best of us.",
		per: 'معنی لغوی این کلمه "تراشیدن پشم گاو میش" است و اصطلاحا به معنای انجام یک سری كارهای احمقانه و كوچکی است كه ظاهرا هیچ ارتباط آشکاری با آنچه كه شما در حال كار بر روی آن هستید ندارند، اما همچنان زنجیره ای از کارهای خسته کننده ای است که می بایست در جهت انجام کار اصلی و بزرگ تر انجام شوند.',
	},
];

function Card({ children, className }: CardProps) {
	return <div className={`rounded-xl shadow-lg ${className}`}>{children}</div>;
}

function CardContent({ children, className, style }: CardContentProps) {
	return (
		<div className={`${className}`} style={style}>
			{children}
		</div>
	);
}

export default function ScrumPoker() {
	const [fullscreenCard, setFullscreenCard] = useState<number | null>(null);

	const toggleFullscreen = (index: number) => {
		setFullscreenCard(index);
	};

	return (
		<div
			className="flex flex-col bg-gray-100 p-8 min-h-screen"
			style={{ gap: "40px" }}
		>
			<div className="flex flex-wrap items-center justify-center gap-4">
				{cardValues.map((card, index) => (
					<motion.div
						key={card.alt}
						className="relative md:w-50 w-32 md:h-75 h-48 cursor-pointer"
						onClick={() => toggleFullscreen(index)}
						animate={{ rotateY: fullscreenCard === index ? -180 : 180 }}
						transition={{ duration: 0.6 }}
						style={{ transformStyle: "preserve-3d" }}
					>
						<Card className="absolute inset-0 w-full h-full backface-hidden">
							<CardContent
								className="flex items-center justify-center w-full h-full bg-cover bg-center"
								style={{ backgroundImage: "url('/cards/Cover-option-2.svg')" }}
							/>
						</Card>
						<Card className="absolute inset-0 w-full h-full backface-hidden transform rotate-y-180">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={`/cards/${card.src}`}
								alt={card.alt}
								style={{ marginTop: "1px" }}
								className="w-full h-full object-contain rounded-lg"
							/>
						</Card>
					</motion.div>
				))}

				<AnimatePresence>
					{fullscreenCard !== null && (
						<motion.div
							className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-10 flex-col"
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0 }}
							onClick={() => setFullscreenCard(null)}
						>
							<motion.img
								src={`/cards/${cardValues[fullscreenCard].src}`}
								alt={cardValues[fullscreenCard].alt}
								className="max-w-full"
								style={{ maxHeight: "80vh" }}
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0 }}
							/>
							<motion.p
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0 }}
								style={{
									maxWidth: "500px",
									marginTop: "10px",
									fontWeight: "bold",
									textAlign: "center",
								}}
							>
								{cardValues[fullscreenCard].alt}
							</motion.p>
							<motion.p
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0 }}
								style={{
									direction: "rtl",
									maxWidth: "500px",
									marginTop: "10px",
									fontWeight: "bold",
									textAlign: "center",
								}}
							>
								{cardValues[fullscreenCard].per}
							</motion.p>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<p
				style={{
					color: "black",
					marginTop: "auto",
					paddingTop: "10px",
					paddingInline: "30px",
					textAlign: "center",
					borderTop: "1px solid gray",
					maxWidth: "500px",
					marginInline: "auto",
				}}
			>
				Design by{" "}
				<a
					style={{ color: "red", fontWeight: "bold" }}
					href="https://github.com/redbooth/scrum-poker-cards"
				>
					Redbooth
				</a>
			</p>
		</div>
	);
}
