import { Skeleton } from '@/components/ui/skeleton'

export const MovieListSkeleton = () => {
	return (
		<div className="space-y-8">
			{[...Array(100)].map((_, index) => (
				<Skeleton key={`${index + 1}`} className="w-full h-[21.10rem]" />
			))}
		</div>
	)
}
