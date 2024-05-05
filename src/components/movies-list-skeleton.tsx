import { Skeleton } from "./ui/skeleton";

export const MoviesListSkeleton = () => {
	return (
		<div className="space-y-8">
			{[...Array(100)].map((_, index) => (
				<Skeleton key={`${index + 1}`} className="h-[21.10rem] w-full" />
			))}
		</div>
	);
};
