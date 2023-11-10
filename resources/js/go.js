function openDex(url) {
  // Create a new window
  const newWindow = window.open('', '_blank');

  // Create an iframe element
  const iframe = document.createElement('iframe');
  iframe.src = 'about:blank'; // Set the iframe source to about:blank

  // Set the iframe styles
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';

  // Wait for the iframe to load
  iframe.onload = function () {
    // Set the iframe's source to the desired URL
    iframe.contentWindow.location.replace(url);
  };

  // Append the iframe to the new window's document
  newWindow.document.body.appendChild(iframe);
}
