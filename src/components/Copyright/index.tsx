const Copyright = () => {

  const copyrightText =
    import.meta.env.VITE_APP_COPYRIGHT_TEXT || "Default Copyright Text.";
  const bgColor = import.meta.env.VITE_APP_COPYRIGHT_BG_COLOR || "transparent"; // Default background color
  const textColor = import.meta.env.VITE_APP_COPYRIGHT_TEXT_COLOR || "#ffffff"; // Default text color

  return (
    <footer style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="footer-content text-center py-3">
        <p>&copy; Copyright {copyrightText} {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Copyright;
