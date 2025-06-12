import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.NEXT_PUBLIC_ENCRYPT_KEY || 'default_key';

// Helper: base64 to URL-safe base64
const toUrlSafeBase64 = (base64: string) =>
  base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

const fromUrlSafeBase64 = (urlSafe: string) => {
  let base64 = urlSafe.replace(/-/g, '+').replace(/_/g, '/');
  // Tambahkan padding jika perlu
  while (base64.length % 4 !== 0) base64 += '=';
  return base64;
};

export const encryptId = (id: number): string => {
  const encrypted = CryptoJS.AES.encrypt(id.toString(), SECRET_KEY).toString();
  return toUrlSafeBase64(encrypted); // jadikan URL-safe
};

export const decryptId = (encryptedId: string): number => {
  const base64 = fromUrlSafeBase64(encryptedId); // ubah balik ke base64 normal
  const bytes = CryptoJS.AES.decrypt(base64, SECRET_KEY);
  return parseInt(bytes.toString(CryptoJS.enc.Utf8), 10);
};
