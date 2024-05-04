import css from './Options.module.css';

const Options = ({ initCount, total, toReset, onUpdate }) => {
  return (
    <div className={css.buttonsContainer}>
      <button
        className={css.btn}
        type="button"
        onClick={() => onUpdate('good')}
      >
        Good
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => onUpdate('neutral')}
      >
        Neutral
      </button>
      <button className={css.btn} type="button" onClick={() => onUpdate('bad')}>
        Bad
      </button>
      {total > 0 && (
        <button
          className={css.btn}
          type="reset"
          onClick={() => toReset(initCount)}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
