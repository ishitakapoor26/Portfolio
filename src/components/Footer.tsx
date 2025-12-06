export default function Footer() {
  return (
    <footer className="py-14 px-6 md:px-20 bg-gray-50 border-t border-gray-200">
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        
        <div className="text-lg font-semibold">Ishita Kapoor</div>

        <div className="flex gap-6 text-gray-600">
          <a href="#" className="hover:text-black">Instagram</a>
          <a href="#" className="hover:text-black">LinkedIn</a>
          <a href="#" className="hover:text-black">Twitter</a>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Ishita Kapoor. All rights reserved.
      </p>
    </footer>
  );
}
