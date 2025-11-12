import Image from 'next/image';

export function QtmaLogo() {
	return (
		<div>
			<Image 
                src="/assets/Visuals/QTMALogo.svg" 
                alt="Decorative Patches" 
                width={175} 
                height={175}
            />
		</div>
	);
}