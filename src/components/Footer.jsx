export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-red-500" />
            <span className="font-semibold">FluxAuto</span>
          </div>
          <nav className="flex items-center gap-6 text-white/70 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Support</a>
          </nav>
        </div>
        <div className="mt-8 text-center md:text-left text-white/50 text-xs">
          © {new Date().getFullYear()} FluxAuto Inc. Not affiliated with X (Twitter).
        </div>
      </div>
    </footer>
  );
}
