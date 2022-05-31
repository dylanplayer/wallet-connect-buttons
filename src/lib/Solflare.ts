export const getPublicKey = async () => {
  const provider = getProvider();
  const connected = await provider.connect();
  if (connected) {
    return provider.publicKey.toString();
  } else {
    return null;
  }
}

const getProvider = () => {
  if ("solflare" in window) {
    // @ts-ignore
    const provider = window.solflare;
    if (provider.isSolflare) {
      return provider;
    }
  }
  window.open("https://solflare.com/", "_blank");
};
