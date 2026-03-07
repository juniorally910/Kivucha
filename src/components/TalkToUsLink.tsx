import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function TalkToUsLink() {
  return (
    <div className="text-center py-12">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#b8941f] transition-colors text-lg"
      >
        Talk to us to learn more <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}
