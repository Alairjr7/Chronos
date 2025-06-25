type HeadingProps = {
  text: string;
  children: React.ReactNode;
};

export default function Heading(
  { text, children }: HeadingProps,
 
) {
  return (
    <div className="flex items-center justify-center gap-2">
      <h2 className="text-2xl">{text}</h2>
      {children}
    </div>
  );
}
