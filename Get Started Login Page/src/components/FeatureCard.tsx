import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 transition-all hover:shadow-lg hover:border-[#60A5FA] p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-[#EFF6FF] flex-shrink-0">
          <Icon className="w-6 h-6 text-[#2563EB]" />
        </div>
        <div className="flex-1">
          <h3 className="text-[#1E293B] mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
