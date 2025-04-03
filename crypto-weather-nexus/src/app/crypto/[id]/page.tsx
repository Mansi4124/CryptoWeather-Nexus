// src/app/crypto/[id]/page.tsx
export default function CryptoDetail({ params }: { params: { id: string } }) {
    return (
      <div>
        <h1 className="text-2xl">Crypto: {params.id.toUpperCase()}</h1>
        {/* Fetch and display crypto data here */}
      </div>
    );
  }
  