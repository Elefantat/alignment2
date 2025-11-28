module.exports = {
  apps: [
    {
      name: 'alignment',
      script: 'npm',
      args: 'start',
      cwd: '/Users/Elefant/Desktop/Alignment-2',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3101,
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3004,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3004,
      },
      // Logging
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      error_file: './logs/error.log',
      out_file: './logs/output.log',
      merge_logs: true,
      // Restart settings
      exp_backoff_restart_delay: 100,
      restart_delay: 1000,
      min_uptime: '10s',
      max_restarts: 10,
    },
  ],

  // Deployment configuration (optional)
  deploy: {
    production: {
      user: 'deploy',
      host: 'your-server.com',
      ref: 'origin/main',
      repo: 'https://github.com/Elefantat/alignment2.git',
      path: '/var/www/alignment',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
}

