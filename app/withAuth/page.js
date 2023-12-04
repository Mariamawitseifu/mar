// withAuth.js
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

function withAuth(WrappedComponent) {
  return function WithAuthComponent(props) {
    const router = useRouter();

    // Check for authentication token in storage
    const isAuthenticated = // Retrieve the token from storage and validate it

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/dep'); // Redirect to login page if not authenticated
      }
    }, []);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
}

export default withAuth;