# Wallet Connect Buttons
A TS React library that allows you to easily connect to users Solana Wallets.

## Installation Instructions
*Make sure you have [Node](https://nodejs.org/) installed and you have started a [Node](https://nodejs.org/) project.*

```bash
npm i wallet-connect-buttons
```

## Style Props

| attribute | description | type |
| ---- | ----------- | ---- |
| setPublicKey | Function called to set the public key | callback |
| height | Height of the button | string |
| backgroundColor | Button background color | string |
| color | Button border and font color | string |
| borderRadius | Border radius of button | string |
| width | Width of the button | string |

## Phantom Wallet Button
```ts
import { PhantomButton } from 'wallet-connect-buttons';

const [publicKey, setPublicKey] = useState('');

const button = <PhantomButton setPublicKey={setPublicKey} />;
```

## Solflare Wallet Button
```ts
import { SolflareButton } from 'wallet-connect-buttons';

const [publicKey, setPublicKey] = useState('');

const button = <SolflareButton setPublicKey={setPublicKey} />;
```
