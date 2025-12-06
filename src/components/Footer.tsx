export default function Footer(){
  return (
    <footer className="border-t bg-white">
      <div className="container py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="font-semibold">Ishita Kapoor</div>
          <div className="text-sm text-gray-500">Strategic advisor • Leadership coach • Keynote speaker</div>
        </div>
        <div className="text-sm text-gray-500">© {new Date().getFullYear()} Ishita Kapoor. All rights reserved.</div>
      </div>
    </footer>
  )
}