export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#04060f]/90 py-6 text-zinc-400">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between py-8">
                <div className="space-y-1 text-lg text-zinc-300">
                    <p>Contact: hello@auroralabs.dev</p>
                    <p>Phone: +1 (555) 123-4567</p>
                </div>
            </div>
            <div className="mx-auto h-[1px] w-[95%] bg-white rounded-[20px]"/>
            <div className="mx-auto mt-6 max-w-7xl px-6">
                <p className="text-md text-white-500 text-center font-bold">© {new Date().getFullYear()} Aurora Labs. All rights reserved.</p>
            </div>
        </footer>
    );
}
