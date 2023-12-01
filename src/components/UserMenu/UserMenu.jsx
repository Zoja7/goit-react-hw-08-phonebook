import css from './UserMenu.module.css';
const UserMenu = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.userName}>Welcome!!!</p>
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
