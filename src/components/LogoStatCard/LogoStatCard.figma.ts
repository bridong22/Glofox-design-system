// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1829-4293
// source=src/components/LogoStatCard/LogoStatCard.tsx
// component=LogoStatCard
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const name = readText('Customer name', 'Customer name');
const metricLabel = readText('Bookings', 'Bookings');
const metricValue = readText('1,234%', '1,234%');

export default {
  example: figma.code`<LogoStatCard name="${name}" metricLabel="${metricLabel}" metricValue="${metricValue}" />`,
  imports: ['import { LogoStatCard } from "src/components/LogoStatCard"'],
  id: 'logo-stat-card',
  metadata: { nestable: true },
};
