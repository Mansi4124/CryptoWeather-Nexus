// src/app/api/crypto.ts
export async function fetchCrypto() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,solana&vs_currencies=usd&include_market_cap=true&include_24hr_change=true"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch cryptocurrency data");
  }

  return res.json();
}
