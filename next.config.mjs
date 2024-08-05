/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
              // Basic redirect
            {
                source: '/', 
                destination: '/dashboard',
                statusCode: 307
            }
        ]
    }
};

export default nextConfig;
