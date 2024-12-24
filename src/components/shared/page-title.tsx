type PageTitleProps = {
	title: string
	description: string
}

export const PageTitle = ({ title, description }: PageTitleProps) => {
	return (
		<div className="space-y-2">
			<h1 className="font-bold text-3xl tracking-tight">{title}</h1>
			<p className="text-muted-foreground text-sm">{description}</p>
		</div>
	)
}
