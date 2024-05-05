import { Props } from "@/types";
import { Link, Star } from "lucide-react";
import Image from "next/image";

type MovieCardProps = {
	movie: Props;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
	return (
		<div className="relative rounded-xl border bg-muted shadow-lg dark:bg-muted/50 backdrop-blur-sm flex items-center gap-4 p-6">
			<span className="absolute -top-3 -left-3 bg-primary text-primary-foreground text-sm font-semibold size-8 flex items-center justify-center rounded-full">
				{movie.rank}
			</span>

			<div className="relative size-48 rounded-xl overflow-hidden">
				<Image
					src={movie.image}
					alt={movie.title}
					quality={100}
					sizes="192px"
					placeholder="blur"
					blurDataURL={movie.thumbnail}
					fill
					className="object-cover aspect-square"
				/>
			</div>

			<div className="flex-1 space-y-6">
				<div className="space-y-2">
					<span className="text-xs text-muted-foreground block">
						{movie.year} - {movie.genre.join(", ")}
					</span>

					<div>
						<h2 className="text-lg font-semibold">{movie.title}</h2>
						<p className="text-sm text-muted-foreground line-clamp-2">
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
	);
};
