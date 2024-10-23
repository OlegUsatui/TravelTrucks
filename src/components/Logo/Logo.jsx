import sprite from '@assets/sprite.svg';

const Logo = () => {
  return (
    <div>
      <svg width="136" height="16">
        <use xlinkHref={`${sprite}#icon-logo`} />
      </svg>
    </div>
  );
};

export default Logo;