export const getPublicKey = async () => {
  const provider = getProvider();
  const publicKey = await provider.connect();
  return publicKey.publicKey.toBase58();
}

const getProvider = () => {
  if ("solana" in window) {
    // @ts-ignore
    const provider = window.solana;
    if (provider.isPhantom) {
      return provider;
    }
  }
  window.open("https://phantom.app/", "_blank");
};
