import { siteUrl } from '@/utils/env'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: ['/', '/series'],
			disallow: [],
		},
		sitemap: `${siteUrl}/sitemap.xml`,
	}
}
