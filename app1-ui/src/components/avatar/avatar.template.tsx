import { AvatarTemplateProps } from "./avatar.types";

export function AvatarTemplate ({ initials, ...rest} : AvatarTemplateProps) {
  return (
    <div className="inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-orange-600 rounded-full" {...rest}>
        <span className="font-medium text-zinc-200">{initials}</span>
    </div>
  )
}
