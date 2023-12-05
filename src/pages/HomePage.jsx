import React from 'react';
const styles = {
  container: {
    // minHeight: 'calc(100vh - 50px)',
    paddingTop: 84,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => {
  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.title}>
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
          Welcome to Phone Book !{' '}
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
