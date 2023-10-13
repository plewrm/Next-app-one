/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async = () => {
        return [
            // {
            //     source: '/authorization',
            //     destination: '/',
            //     permanent: false
            // },
            {
                source: '/authorization/serverauth',
                destination: '/',
                permanent: false
            },
        ]
    },
    images: {
        domains: ["www.clker.com"]
    }

}

module.exports = nextConfig