import type { MetadataRoute } from 'next'

import { siteUrl } from '@/utils/env'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: siteUrl,
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${siteUrl}/series`,
			lastModified: new Date(),
			priority: 0.8,
		},
	]
}
