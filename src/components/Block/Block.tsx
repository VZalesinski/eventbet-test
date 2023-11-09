import style from './Block.module.css';

export const Block = ({
  text,
  animate,
}: {
  text: string;
  animate?: boolean;
}) => {
  return (
    <div className={`${style.block} ${animate ? style.block_1 : ''}`}>
      {text}
    </div>
  );
};
