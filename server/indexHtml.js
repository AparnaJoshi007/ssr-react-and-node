export const indexHtml = ({ markup }) => {
  return `
    <!doctype html>
    <html lang="en">
      <body>
        <div id="root">${markup}</div>
        <script type="text/javascript" src="js/main.js" defer></script>
        <script type="text/javascript" src="js/vendors~main.js" defer></script>
      </body>
    </html>
  `;
};