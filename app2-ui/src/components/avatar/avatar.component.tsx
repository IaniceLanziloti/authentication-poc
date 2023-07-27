import { AvatarTemplate } from "./avatar.template";
import { AvatarProps } from "./avatar.types";

export function Avatar({ name, ...rest }: AvatarProps) {
  const initials = name.split(' ').slice(0,2).map(letter=>letter.toLocaleUpperCase()[0]).join('')
  return <AvatarTemplate initials={initials} {...rest}/>
}