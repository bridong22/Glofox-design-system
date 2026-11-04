// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2192-915
// source=src/components/SectionImprovementScores/SectionImprovementScores.tsx
// component=SectionImprovementScores
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');
const showScore4 = instance.getBoolean('Show score 4');

export default {
  example: figma.code`<SectionImprovementScores showHeading={${showHeading}} scores={${showScore4} ? undefined : [{ prefix: 'up to', value: '97%+', label: 'Collection Rates', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', source: 'Source: ABC Fitness customer data, 2025' }, { prefix: 'up to', value: '97%+', label: 'Collection Rates', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', source: 'Source: ABC Fitness customer data, 2025' }, { prefix: 'up to', value: '97%+', label: 'Collection Rates', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', source: 'Source: ABC Fitness customer data, 2025' }]}`,
  imports: ['import { SectionImprovementScores } from "src/components/SectionImprovementScores"'],
  id: 'section-improvement-scores',
  metadata: { nestable: true },
};
