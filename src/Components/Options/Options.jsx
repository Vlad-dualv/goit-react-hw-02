import css from './Options.module.css';

const Options = () => {
  return (
    <div className={css.buttonsContainer}>
      <button className={css.btn} type="button">
        Good
      </button>
      <button className={css.btn} type="button">
        Neutral
      </button>
      <button className={css.btn} type="button">
        Bad
      </button>
    </div>
  );
};

export default Options;
