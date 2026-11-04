import { SectionHeading } from '../SectionHeading';
import { PersonCard, type PersonCardProps } from '../PersonCard';
import styles from './SectionTeam.module.css';

export interface SectionTeamProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  showRow2?: boolean;
  members?: PersonCardProps[];
  className?: string;
}

const DEFAULT_MEMBER: PersonCardProps = { showLinkedIn: true, showLink: false };
const DEFAULT_MEMBERS: PersonCardProps[] = Array.from({ length: 6 }, () => DEFAULT_MEMBER);

export function SectionTeam({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  showRow2 = true,
  members = DEFAULT_MEMBERS,
  className,
}: SectionTeamProps) {
  const row1 = members.slice(0, 3);
  const row2 = members.slice(3, 6);
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <div className={styles.row}>
          {row1.map((member, index) => (
            <PersonCard key={index} className={styles.card} {...member} />
          ))}
        </div>
        {showRow2 && row2.length > 0 && (
          <div className={styles.row}>
            {row2.map((member, index) => (
              <PersonCard key={index} className={styles.card} {...member} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
