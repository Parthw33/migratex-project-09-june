import type { StatsBanner } from '@/lib/types';

export default function StatsBanner({ data }: { data?: StatsBanner }) {
  const { section_heading, stats } = data || {};

  return (
    <section className="py-16 lg:py-20" style={{ backgroundColor: '#0a83a0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {section_heading && (
          <h2 className="text-center font-bold text-white mb-12 font-heading" style={{ fontSize: '26.4px', lineHeight: '36.3px' }}>
            {section_heading}
          </h2>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {(stats || []).map?.((stat, idx) => (
            <div key={idx} className="text-center">
              {stat?.stat_value && (
                <div className="text-4xl lg:text-5xl font-bold text-white font-heading mb-2">
                  {stat.stat_value}
                </div>
              )}
              {stat?.stat_label && (
                <div className="text-sm text-white/80 uppercase tracking-wider">
                  {stat.stat_label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}