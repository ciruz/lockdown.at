import CookieConsent from "react-cookie-consent";

const Cookie = ({ debug = false }) => (
  <CookieConsent
    debug={debug}
    buttonText="Ok"
    style={{
      background: "#0f2027",
      borderRadius: ".5rem",
      margin: "1rem",
      boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.15)",
      fontSize: ".85rem",
      right: "0",
      left: "auto",
      maxWidth: "80%",
      width: "auto",
    }}
    contentStyle={{
      flex: "1 0 200px",
    }}
    buttonStyle={{
      color: "#666666",
      backgroundColor: "#ffffff",
      fontWeight: "bold",
      borderRadius: ".5rem",
      fontSize: ".85rem",
    }}
  >
    Diese Webseite verwendet Cookies 🍪.
  </CookieConsent>
);

export default Cookie;
