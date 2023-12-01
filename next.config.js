/** @type {import('next').NextConfig} */
// next.config.js

module.exports = {
    webpack: (config) => {
      // Asegúrate de mantener cualquier otra configuración existente aquí
  
      // Agrega la regla para manejar archivos .mp4
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/videos/', // Ruta donde se guardarán los archivos
          },
        },
      });
  
      // Devuelve la configuración actualizada
      return config;
    },
  };
  