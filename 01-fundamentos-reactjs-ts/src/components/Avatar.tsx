import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

// Uando uma propriedade for opcional, deve-se usar a "?".
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({hasBorder=true, ...props}: AvatarProps) {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        {...props}
        />
    )
}