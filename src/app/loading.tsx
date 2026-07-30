export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center w-32 h-32">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#7AC142] animate-spin"></div>
          
          {/* Inner Text */}
          <span className="text-2xl font-bold text-gray-800 tracking-wider z-10 animate-pulse">OSWAL</span>
        </div>
        <p className="mt-4 text-[#7AC142] font-semibold tracking-widest text-sm uppercase">Loading Catalog...</p>
      </div>
    </div>
  );
}
