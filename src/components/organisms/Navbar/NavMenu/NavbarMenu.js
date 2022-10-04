import './NavbarMenu.scss';
const NavbarMenu = (props) => {
  return (
    <div class="NavbarMenu">
      <span onClick={props.onClick}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="47"
            height="47"
            rx="5.5"
            stroke="white"
            stroke-opacity="0.295743"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 18C16 17.4477 16.4477 17 17 17H31C31.5523 17 32 17.4477 32 18C32 18.5523 31.5523 19 31 19H17C16.4477 19 16 18.5523 16 18ZM16 24C16 23.4477 16.4477 23 17 23H31C31.5523 23 32 23.4477 32 24C32 24.5523 31.5523 25 31 25H17C16.4477 25 16 24.5523 16 24ZM17 29C16.4477 29 16 29.4477 16 30C16 30.5523 16.4477 31 17 31H31C31.5523 31 32 30.5523 32 30C32 29.4477 31.5523 29 31 29H17Z"
            fill="white"
          />
        </svg>
      </span>
    </div>
  );
};

export default NavbarMenu;
