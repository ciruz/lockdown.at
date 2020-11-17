import { useEffect, useState } from "react";

import Datenschutz from "./Datenschutz";
import { ReactComponent as Github } from "../icons/github.svg";
import Impressum from "./Impressum";
import Modal from "react-modal";
import ReactGA from "react-ga";
import { ReactComponent as Remove } from "../icons/remove.svg";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("impressum");

  useEffect(() => {
    if (isOpen) ReactGA.modalview(`/${content}`);
  }, [isOpen]);

  return (
    <>
      <footer>
        <ul>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setContent("datenschutz");
                setIsOpen(!isOpen);
              }}
            >
              Datenschutz
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ciruz/lockdown.at"
              target="_blank"
              rel="noreferrer"
              title={`Auf GitHub öffnen`}
            >
              <Github height={30} width={30} />
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setContent("impressum");
                setIsOpen(!isOpen);
              }}
            >
              Impressum
            </a>
          </li>
        </ul>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(!isOpen)}
          contentLabel={`${
            content === "impressum" ? "Impressum" : "Datenschutz"
          }`}
          overlayClassName="modal-overlay"
          ariaHideApp={false}
        >
          {content === "impressum" ? <Impressum /> : <Datenschutz />}
          <div className="modal-close" onClick={() => setIsOpen(!isOpen)}>
            <Remove />
          </div>
        </Modal>
      </footer>
    </>
  );
};

export default Footer;
