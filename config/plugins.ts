export default ({ env }) => ({
    "strapi-neon-tech-db-branches": {
        enabled: true,
        config: {
            neonApiKey: process.env.NEON_API_KEY,
            neonProjectName: process.env.NEON_PROJECT_NAME,
            neonRole: process.env.NEON_ROLE,
            branchName: process.env.BRANCH_NAME || 'main',
        },
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    }
});