export default ({ className = "w-4 h-4" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 512 512"
         className={`fill-current ${className}`}
      >
         <path d="M182.461 155.48 232 105.941V368a24 24 0 0 0 48 0V105.941l49.539 49.539a24 24 0 1 0 33.941-33.941l-90.509-90.51a24 24 0 0 0-33.942 0l-90.509 90.51a24 24 0 1 0 33.941 33.941z" />
         <path d="M464 232a24 24 0 0 0-24 24v184H72V256a24 24 0 0 0-48 0v192a40 40 0 0 0 40 40h384a40 40 0 0 0 40-40V256a24 24 0 0 0-24-24z" />
      </svg>
   );
};
