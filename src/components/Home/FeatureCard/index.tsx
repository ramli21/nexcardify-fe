'use client';

import { Icon } from '@iconify/react/dist/iconify.js';

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition flex flex-col gap-4 text-center items-center">
    <div className="bg-primary/10 text-primary p-4 rounded-full inline-flex">
      <Icon icon={icon} className="text-3xl" />
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-black/70">{desc}</p>
  </div>
);

export default FeatureCard;
