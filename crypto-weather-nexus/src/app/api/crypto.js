// src/app/api/crypto.ts
export async function fetchCrypto() {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`);
    return res.json();
  }
  