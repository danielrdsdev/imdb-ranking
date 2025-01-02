'use client'

import { Loader } from 'lucide-react'

import { useInfiniteScroll } from '@/hooks/use-infinite-scroll'
import type { Props } from '@/types'

import { MovieCard } from '@/components/shared/movie-card'

type MovieListProps = {
	query: string
	data: Props[] | undefined
}

export const MovieList = ({ query, data }: MovieListProps) => {
	const { loadingMore, isLoading } = useInfiniteScroll(data?.length || 0)
	const filteredData = data?.slice(0, loadingMore)

	return (
		<div className="space-y-8">
			{filteredData?.map((item) => (
				<MovieCard key={item.id} movie={item} />
			))}

			{!isLoading && !filteredData?.length && (
				<p className="text-center text-muted-foreground">
					No movies found for <span className="text-primary">"{query}"</span>
				</p>
			)}

			{isLoading && (
				<div className="flex justify-center">
					<Loader className="text-primary animate-spin size-6" />
				</div>
			)}
		</div>
	)
}
