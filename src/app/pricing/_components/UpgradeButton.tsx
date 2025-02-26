import { Star } from "lucide-react";

export default function UpgradeButton() {
  return (
    <div className="relative">
      <button
        disabled
        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-yellow-200/60
          bg-gradient-to-r from-yellow-900/20 to-yellow-700/20 rounded-lg cursor-not-allowed
          border border-yellow-900/30"
      >
        <Star className="w-5 h-5 text-yellow-400" />
        Upgrade to Pro
      </button>
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm text-yellow-500">
        Coming Soon
      </span>
    </div>
  );
}
