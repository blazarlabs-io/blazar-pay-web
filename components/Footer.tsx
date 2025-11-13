import Link from "next/link";


export default function Footer() {
return (
<footer className="border-t py-10 mt-20">
<div className="container-px max-w-screen grid gap-6 sm:flex sm:items-center sm:justify-between">
<p className="font-black">Blazar <span className="text-teal-500">pay</span></p>
<nav className="flex gap-6 text-sm text-slate-600">
<Link href="/privacy">Privacy</Link>
<Link href="/terms">Terms</Link>
<Link href="/contact">Contact</Link>
</nav>
</div>
<div className="container-px max-w-screen mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Blazar Pay</div>
</footer>
);
}