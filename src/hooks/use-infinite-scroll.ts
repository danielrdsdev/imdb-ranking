import { useCallback, useEffect, useState } from 'react'

export const useInfiniteScroll = (dataLength: number) => {
	const [loadingMore, setLoadingMore] = useState(5)
	const [isLoading, setIsLoading] = useState(false)

	const handleScroll = useCallback(() => {
		const hasReachedBottom =
			window.innerHeight + document.documentElement.scrollTop <
			document.documentElement.offsetHeight - 500

		if (hasReachedBottom || isLoading || loadingMore >= dataLength) {
			return
		}

		setIsLoading(true)
		setTimeout(() => {
			setLoadingMore((prev) => prev + 5)
			setIsLoading(false)
		}, 1000)
	}, [isLoading, loadingMore, dataLength])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [handleScroll])

	return {
		loadingMore,
		isLoading,
	}
}
