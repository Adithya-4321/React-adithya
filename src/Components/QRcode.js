import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <label>
        Enter text or URL:
        <input type="text" value={text} onChange={handleInputChange} />
      </label>

      {text && (
        <div>
          <p>Scan the QR code to visit the website:</p>
          <QRCode value={text} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;





