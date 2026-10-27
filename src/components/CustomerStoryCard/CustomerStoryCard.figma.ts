// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1832-5192
// source=src/components/CustomerStoryCard/CustomerStoryCard.tsx
// component=CustomerStoryCard
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const headline = readText(
  "Short headline of the customer outcome, written in the customer's words.",
  "Short headline of the customer outcome, written in the customer's words.",
);
const showMetric = instance.getBoolean('Show metric');
const metricLabel = readText(
  'Metric label, e.g. increase in member retention',
  'Metric label, e.g. increase in member retention',
);
const metricValue = readText('+42%', '+42%');
const showLink = instance.getBoolean('Show link');
const linkLabel = readText('Read More', 'Read More', { traverseInstances: true });

export default {
  example: figma.code`<CustomerStoryCard headline="${headline}" showMetric={${showMetric}} metricLabel="${metricLabel}" metricValue="${metricValue}" showLink={${showLink}} linkLabel="${linkLabel}" />`,
  imports: ['import { CustomerStoryCard } from "src/components/CustomerStoryCard"'],
  id: 'customer-story-card',
  metadata: { nestable: true },
};
