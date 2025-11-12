import Image from 'next/image';

export function QtmaLogo() {
	return (
		<div>
			<Image 
                src="/assets/Visuals/QTMALogo.svg" 
                alt="Decorative Patches" 
                width={400} 
                height={400}
            />
		</div>
	);
}