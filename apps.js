import React, { useState } from 'react';

function Layout({ children, title }) {
  // layout component 
}

export default function App({ Component, pageProps }) {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState(null);
  const [state, setState] = useState({
    title: '',
    post: null
  });

  return (
    <>
      <div>
        {/* <Navbar /> */}
        {children}
      </div>
      <Layout>
        <Component state={state} />
      </Layout>
    </>
  );
}
