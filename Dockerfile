# Menggunakan image Node.js sebagai base image
FROM node:20-alpine

# Menetapkan direktori kerja di dalam container
WORKDIR /app

# Menyalin file package.json dan package-lock.json ke dalam container
COPY package.json ./
COPY package-lock.json ./

# Menginstall dependencies
RUN npm install

# Menyalin semua file project ke dalam container
COPY . .

# Build aplikasi untuk produksi
RUN npm run build

# Menjalankan aplikasi
CMD ["npm", "start"]

# Expose port yang digunakan oleh aplikasi
EXPOSE 3000
