export default function Sidebar() {
    return (
        <section className="sticky top-0 bottom-0 max-h-screen overflow-auto no-scrollbar">
            <a href="#details" className="block text-center m-4 border-y-2 border-white py-3">
                Details
            </a>
            <a href="#chapter1" className="block text-center m-4 border-y-2 border-white py-3">
                Chapter 1
            </a>
            <a href="#chapter2" className="block text-center m-4 border-y-2 border-white py-3">
                Chapter 2
            </a>
            <a href="#chapter3" className="block text-center m-4 border-y-2 border-white py-3">
                Chapter 3
            </a>
            <a href="#chapter4" className="block text-center m-4 border-y-2 border-white py-3">
                Chapter 4
            </a>
        </section>
    );
}
