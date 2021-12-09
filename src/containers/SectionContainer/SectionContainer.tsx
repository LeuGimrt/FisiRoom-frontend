type Props = {
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = ({ children, className = '' }: Props) => {
  return <div className={'card ' + className}>{children}</div>;
};

export default SectionContainer;
