import './Button.scss';

type Props = {
  children: React.ReactNode;
  elevated?: boolean;
  color?: string;
  className?: string;
};

const Button = ({
  children,
  elevated = false,
  color = 'secondary',
  className = '',
}: Props) => {
  let classString = `btn btn-${color}`;
  elevated && (classString = classString.concat(' btn-elevated'));
  classString = classString.concat(' ', className);

  return <button className={classString}>{children}</button>;
};

export default Button;
