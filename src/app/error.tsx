'use client'

import { Button } from '@/components/ui/button'

export default function CustomError({ reset }: { reset: () => void }) {
	return (
		<div className="flex flex-col justify-center items-center space-y-8 px-6 h-[80dvh]">
			<h1 className="font-title text-5xl lg:text-6xl leading-[3.125rem] lg:leading-[3.7125rem]">
				Erro
			</h1>
			<p className="lg:text-lg leading-6">
				Ocorreu um erro ao renderizar a página. Tente novamente.
			</p>
			<Button size="lg" onClick={() => reset()}>
				Tentar novamente
			</Button>
		</div>
	)
}
