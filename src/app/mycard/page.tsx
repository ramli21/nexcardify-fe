'use client'
import { Pencil } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <div className="w-3/5 pr-6 border-r border-gray-200">
        <h2 className="text-xl font-bold text-gray-700 mb-6">Your Card Settings</h2>
          <div className="mb-6">
            <div className="relative w-24 h-24">
              <img
                src="/default-avatar.png"
                alt="Logo"
                className="w-24 h-24 object-cover rounded-full border border-gray-300"
              />
              <label
                htmlFor="logo-upload"
                className="absolute bottom-0 right-0 bg-white border border-gray-300 p-1 rounded-full cursor-pointer hover:bg-gray-100"
              >
                <Pencil className="w-4 h-4 text-gray-600" />
              </label>
              <input
                id="logo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  // handle preview or upload
                  const file = e.target.files?.[0];
                  if (file) {
                    // Optional: implement preview logic
                    console.log(file.name);
                  }
                }}
              />
            </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-600 text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="e.g. John Smith"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 text-sm mb-1">Nickname <span className="text-gray-400 text-xs">(optional)</span></label>
            <input
              type="text"
              placeholder="e.g. johnny"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="e.g. john@example.com"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 text-sm mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="e.g. +1 234 567 890"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Job</label>
          <input type="text" placeholder="e.g. Software Engineer" className="w-full border border-gray-300 rounded-lg p-2" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Company</label>
          <input type="text" placeholder="e.g. TechNova Inc." className="w-full border border-gray-300 rounded-lg p-2" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Address</label>
          <textarea placeholder="e.g. 123 Main St, San Francisco, CA" className="w-full border border-gray-300 rounded-lg p-2" rows={3}></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 text-sm mb-1">Link Website</label>
          <input type="url" placeholder="e.g. https://johnsmith.dev" className="w-full border border-gray-300 rounded-lg p-2" />
        </div>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg">
          Save
        </button>
      </div>
      <div className="w-2/5 p-10 flex items-center justify-center bg-white">
  <div className="w-[320px] h-[480px] rounded-3xl border border-gray-300 bg-gradient-to-br from-[#1f2937] to-[#374151] text-white shadow-xl flex flex-col items-center p-6 relative">
    
    {/* Logo */}
    <div className="w-24 h-24 rounded-full bg-white overflow-hidden border-4 border-white mb-4">
      <img
        src="/default-avatar.png" // Ganti dengan dynamic logo jika ada
        alt="Logo"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Nama dan Jabatan */}
    <div className="text-center mb-4">
      <h2 className="text-2xl font-bold">John Smith</h2>
      <p className="text-sm text-gray-300">Senior Developer at Codeify Inc.</p>
    </div>

    {/* Kontak */}
    <div className="text-sm space-y-1 mb-4 text-center">
      <p>Email: john@example.com</p>
      <p>Phone: +1 234 567 890</p>
      <p>Website: www.johnsmith.dev</p>
    </div>

    {/* Alamat */}
    <div className="text-xs text-center text-gray-400 mb-6 px-4">
      123 Silicon Valley Blvd, San Francisco, CA
    </div>

    {/* Ikon Sosial */}
    <div className="flex gap-4 text-xl text-white">
      <i className="fab fa-linkedin"></i>
      <i className="fab fa-github"></i>
      <i className="fab fa-instagram"></i>
    </div>

    {/* Footer */}
    <div className="absolute bottom-4 text-white text-xs opacity-40">
      digitalcard.io/johnsmith
    </div>
  </div>
</div>

    </div>
  );
}
