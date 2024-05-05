import { Props } from "@/types";
import { Link, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

type MovieCardProps = {
	movie: Props;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
	const [isOpen, setIsOpen] = useState(false);

	function handleDialogClick() {
		setIsOpen((prev: boolean) => !prev);
	}

	return (
		<>
			<div className="relative rounded-xl border bg-muted shadow-lg dark:bg-muted/50 backdrop-blur-sm flex flex-col sm:flex-row items-center gap-4 p-6">
				<span className="absolute -top-3 -left-3 bg-primary text-primary-foreground text-sm font-semibold size-8 flex items-center justify-center rounded-full">
					{movie.rank}
				</span>

				<button
					type="button"
					className="relative w-full h-72 sm:w-64 sm:h-72 rounded-xl overflow-hidden group bg-background cursor-crosshair focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-shadow duration-300"
					onClick={handleDialogClick}
				>
					<Image
						src={movie.image}
						alt={movie.title}
						priority
						quality={100}
						sizes="(max-width: 640px) 368px, 256px"
						placeholder="blur"
						blurDataURL={movie.thumbnail}
						fill
						className="object-cover aspect-square object-center group-hover:opacity-60 transition-opacity duration-300"
					/>
				</button>

				<div className="flex-1 space-y-6">
					<div className="space-y-2">
						<span className="text-xs text-muted-foreground block">
							{movie.year} - {movie.genre.join(", ")}
						</span>

						<div>
							<h2 className="text-lg font-semibold">{movie.title}</h2>
							<p className="text-sm text-muted-foreground line-clamp-3">
								{movie.description}
							</p>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<span className="font-medium text-sm inline-flex items-center">
							<Star className="size-4 mr-2" /> {movie.rating}
						</span>

						<a
							href={movie.imdb_link}
							target="_blank"
							rel="noreferrer noopener"
							className="font-medium inline-flex items-center text-sm hover:underline underline-offset-2"
						>
							Ver em IMDB
							<Link className="ml-2 size-4" />
						</a>
					</div>
				</div>
			</div>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className="p-0 max-w-2xl flex items-center justify-center bg-background/60 backdrop-blur">
					<div className="rounded-sm overflow-hidden relative">
						<Image
							src={movie.big_image}
							alt={movie.title}
							width={672}
							height={1024}
							sizes="(max-width: 640px) 368px, 672px"
							quality={100}
							className="object-contain rounded-sm aspect-square"
						/>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};
