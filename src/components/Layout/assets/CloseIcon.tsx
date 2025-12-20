import { HEADER_CONTENT_HEIGHT } from "../Layout.styles";

export const CloseIcon = () => {
  return (
    <svg
      width={HEADER_CONTENT_HEIGHT}
      height={HEADER_CONTENT_HEIGHT}
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.6 0H2.96997C1.32968 0 0 1.32972 0 2.97V53.6C0 55.2403 1.32968 56.57 2.96997 56.57H53.6C55.2403 56.57 56.5699 55.2403 56.5699 53.6V2.97C56.5699 1.32972 55.2403 0 53.6 0Z"
        fill="white"
      />
      <path
        d="M36.4102 20.04L20.1602 36.29"
        stroke="#333333"
        stroke-width="4"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M36.4102 36.29L20.1602 20.04"
        stroke="#333333"
        stroke-width="4"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  );
};
