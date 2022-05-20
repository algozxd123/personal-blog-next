module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '90ae62d9678d543bdc2d7f0a6c4c0205'),
  },
});
