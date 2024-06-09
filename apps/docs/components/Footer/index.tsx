import React from "react";


const Footer = (props: Props) => {
  const {} = props;
  return (
    <footer>
      <div className="text-white text-sm text-center py-4">
        &copy; 2024{" "}
        <a className="hover:text-bhagwa-600" href="https://www.linkedin.com/in/jonathanalvares/">
          Jonathan Alvares
        </a>
      </div>
    </footer>
  );
};
type Props = {};
export default React.memo(Footer);
