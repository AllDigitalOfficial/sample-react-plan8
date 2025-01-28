const Copyright = () => {
  // Get environment variable values
  const copyrightText =
    import.meta.env.VITE_APP_COPYRIGHT_TEXT || "Copyright BnbPump @2024 All Rights Reserved.";
  const bgColor = import.meta.env.VITE_APP_COPYRIGHT_BG_COLOR || "transparent"; // Default background color
  const textColor = import.meta.env.VITE_APP_COPYRIGHT_TEXT_COLOR || "#ffffff"; // Default text color

  return (
    <footer style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="my-2">
            <hr className="border-secondary opacity-20" />
          </div>
      <div className="footer-content text-center py-4">
        <p>&copy; {copyrightText}</p>
      </div>
    </footer>
  );
};

export default Copyright;
