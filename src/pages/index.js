import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page
    router.push('/home');
  }, [router]);

  return null; // This component doesn't render anything
}
