import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#FCFBF9] p-4">
            <div className="relative w-full max-w-6xl shadow-2xl rounded-lg overflow-hidden border border-stone-200">
                <Image
                    src="/hero-image.png"
                    alt="Earthe - Sustainable Coconut & Wood Products"
                    width={1200}
                    height={800}
                    className="w-full h-auto block"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                    priority
                />
            </div>

            {/* Mobile Contact Quick Actions */}

        </main>
    );
}
