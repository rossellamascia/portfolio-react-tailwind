export interface GalleryProps {

}

const Gallery: React.FC<GalleryProps> = () => {
    return (
        <section className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8 max-w-5xl mx-auto" style={{ 'minHeight': '300px' }}>
            <div className="relative {{ if eq (sub (mod $index  3) 1) 0 }}row-span-2{{end}} shadow-sm md:shadow-2xl">
                <img
                    className="rounded object-cover w-full h-full"
                    src="#"
                />
                <div
                    className="absolute top-0 left-0 rounded w-full h-full bg-black bg-opacity-30 grid place-items-center opacity-0 hover:opacity-100 transition-opacity duration-200"
                >
                    <a
                        className="px-6 py-2 rounded-full bg-black text-white"
                        href="https://codepen.io/{{ $username }}/pen/{{ $val }}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >View in Codepen</a
                    >
                </div>
            </div>
        </section>
    );
}

export default Gallery;