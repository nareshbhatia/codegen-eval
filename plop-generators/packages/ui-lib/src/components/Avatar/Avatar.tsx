interface AvatarProps {
  name: string;
  photo: string;
}

export function Avatar({ name, photo }: AvatarProps) {
  return (
    <img
      className="inline-block h-56 w-56 rounded-full"
      src={photo}
      alt={name}
    />
  );
}
