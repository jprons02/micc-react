import React from 'react';

const PasswordProtected = ({ children }) => {
  const [password, setPassword] = React.useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'iomicco') {
      setIsPasswordCorrect(true);
    }
  };

  return (
    <div>
      {isPasswordCorrect ? (
        children
      ) : (
        <div style={{ paddingBottom: '30px' }}>
          <div style={{ textAlign: 'center', padding: '30px' }}>
            <p style={{ fontSize: '18px', fontWeight: '500' }}>
              Enter password to view .io
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a target="_blank" href="https://www.miccosukee.com">
              or go to miccosukee.com
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordProtected;
