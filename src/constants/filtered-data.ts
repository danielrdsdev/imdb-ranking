import type { Props } from '@/types'

export const getFilteredData = (data: Props[] | undefined, query: string) => {
	return data?.filter((item) =>
		item.title.toLowerCase().includes(query.toLowerCase())
	)
}
