const Button = props => {
  console.log(props);
  const { css, state, handleAddVote } = props;
  return (
    <div className={css.wraper_btn}>
      {Object.keys(state).map(key => (
        <button
          className={[css.btn, css[key]].join(' ')}
          type="button"
          key={key}
          onClick={() => handleAddVote({ key })}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Button;
