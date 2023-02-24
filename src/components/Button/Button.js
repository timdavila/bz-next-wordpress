import styles from './Button.module.scss';

const Button = ({ children, className, ...rest }) => {
  let buttonClassName = styles.button;

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`;
  }

  return (
    <a {...rest} className={buttonClassName}>
      <div class="cta-label cta-label-white">{children}</div>
      <div class="cta-arrow-white-svg-embed cta-arrow w-embed">
        <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.5077 19.3916C14.1172 19.7821 13.484 19.7821 13.0935 19.3916C12.703 19.0011 12.703 18.3679 13.0935 17.9774L18.0712 12.9996H3.51489C2.96261 12.9996 2.51489 12.5519 2.51489 11.9996C2.51489 11.4473 2.96261 10.9996 3.51489 10.9996H18.0709L13.0935 6.02217C12.703 5.63165 12.703 4.99848 13.0935 4.60796C13.484 4.21743 14.1172 4.21743 14.5077 4.60796L21.1772 11.2775C21.3672 11.4595 21.4855 11.7157 21.4855 11.9996C21.4855 12.1697 21.443 12.3299 21.368 12.4702C21.3287 12.5439 21.2795 12.6137 21.2204 12.6777C21.2111 12.6878 21.2015 12.6978 21.1918 12.7075M21.1918 12.7075L14.5077 19.3916Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </a>
  );
};

export default Button;
