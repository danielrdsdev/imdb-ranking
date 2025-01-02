'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

export const BackToTop = () => {
	const [show, setShow] = useState(false)

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	const handleScroll = useCallback(() => {
		if (!show && window.scrollY > 500) setShow(true)
		if (show && window.scrollY <= 500) setShow(false)
	}, [show])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [handleScroll])

	return (
		<AnimatePresence>
			{show && (
				<motion.div
					className="right-4 bottom-4 z-20 fixed"
					initial={{ opacity: 0, right: -10 }}
					animate={{ opacity: 1, right: 16 }}
					exit={{ opacity: 0, right: -10 }}
					transition={{ duration: 0.3, ease: 'backOut' }}
				>
					<Button
						onClick={scrollToTop}
						size="icon"
						className="shadow-lg shadow-primary/20"
					>
						<ArrowUp className="size-5" />
					</Button>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
