import type { Props } from '@/types'

export function getFilteredData(data: Props[] | undefined, query: string) {
	return data?.filter((item) =>
		item.title.toLowerCase().includes(query.toLowerCase())
	)
}
