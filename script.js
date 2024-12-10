function copyLink(element) {
  const textToCopy = element.innerText;

  // Create a temporary text area to hold the text
  const tempInput = document.createElement("textarea");
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);

  // Select and copy the text
  tempInput.select();
  document.execCommand("copy");

  // Remove the temporary text area
  document.body.removeChild(tempInput);
  // Prevent the default action of the <a> tag
  return false;
}
function composeEmail(email) {
  // Redirect to Gmail compose with 'to' field pre-filled
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}`;

  // Open the URL in the same or a new tab
  window.open(gmailComposeUrl, "_blank"); // Opens in a new tab
}
