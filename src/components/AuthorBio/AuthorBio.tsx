import { AvatarBadge } from '../AvatarBadge';
import styles from './AuthorBio.module.css';

export interface AuthorBioProps {
  avatarInitials?: string;
  name?: string;
  role?: string;
  bio?: string;
}

export function AuthorBio({
  avatarInitials = 'MS',
  name = 'Maeve Sullivan',
  role = 'Studio Operations Lead, ABC Glofox',
  bio = 'Maeve spent seven years running boutique studio operations before joining ABC Glofox, where she works with studio owners on launch planning and retention. Connect on LinkedIn.',
}: AuthorBioProps) {
  return (
    <div className={styles.authorBio}>
      <div className={styles.avatar}>
        <AvatarBadge type="initials" initials={avatarInitials} />
      </div>
      <div className={styles.text}>
        <div className={styles.nameRow}>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>· {role}</p>
        </div>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
}
