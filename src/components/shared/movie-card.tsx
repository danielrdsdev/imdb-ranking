import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import type { Props } from '@/types'
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { ArrowUpRight, Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

type MovieCardProps = {
	movie: Props
}

export const MovieCard = ({ movie }: MovieCardProps) => {
	const [isOpen, setIsOpen] = useState(false)

	function handleDialogClick() {
		setIsOpen((prev: boolean) => !prev)
	}

	return (
		<>
			<div className="relative flex sm:flex-row flex-col items-center gap-4 bg-muted dark:bg-muted/40 shadow-lg backdrop-blur-sm p-6 border rounded-xl">
				<span className="-top-3 -left-3 absolute flex justify-center items-center bg-primary rounded-full font-semibold text-primary-foreground text-sm size-8">
					{movie.rank}
				</span>

				<button
					type="button"
					className="relative bg-background rounded-xl focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-64 h-72 sm:h-72 transition-shadow duration-300 cursor-pointer overflow-hidden focus:outline-none group"
					onClick={handleDialogClick}
				>
					<Image
						src={movie.image}
						alt={movie.title}
						priority
						unoptimized
						sizes="(max-width: 640px) 368px, 256px"
						placeholder="blur"
						blurDataURL={movie.thumbnail}
						fill
						className="group-hover:opacity-60 transition-opacity duration-300 aspect-square object-center object-cover"
					/>
				</button>

				<div className="flex-1 space-y-6">
					<div className="space-y-2">
						<span className="block text-muted-foreground text-xs">
							{movie.year} - {movie.genre.join(', ')}
						</span>

						<div>
							<h2 className="font-semibold text-lg">{movie.title}</h2>
							<p className="line-clamp-3 text-muted-foreground text-sm">
								{movie.description}
							</p>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<span className="inline-flex items-center font-medium text-sm">
							<Star className="mr-2 size-4" /> {movie.rating}
						</span>

						<a
							href={movie.imdb_link}
							target="_blank"
							rel="noreferrer noopener"
							className="inline-flex items-center font-medium text-sm underline-offset-2 hover:underline"
						>
							Ver em IMDB
							<ArrowUpRight className="ml-2 size-4" />
						</a>
					</div>
				</div>
			</div>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogHeader className="sr-only">
					<DialogTitle>Imagem do filme {movie.title}</DialogTitle>
					<DialogDescription>
						Imagem em alta resolução do filme {movie.title}
					</DialogDescription>
				</DialogHeader>
				<DialogContent className="flex justify-center items-center bg-background/60 backdrop-blur p-0 max-w-2xl">
					<div className="relative rounded-sm overflow-hidden">
						<Image
							src={movie.big_image}
							alt={movie.title}
							width={672}
							height={1024}
							sizes="(max-width: 640px) 368px, 672px"
							quality={100}
							className="rounded-sm aspect-square object-contain"
						/>
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}
