/// <reference types="react" />
interface PhantomButtonProps {
    setPublicKey: Function;
    height?: string;
    backgroundColor?: string;
    color?: string;
    borderRadius?: string;
    width?: string;
}
declare const PhantomButton: ({ setPublicKey, height, backgroundColor, color, borderRadius, width }: PhantomButtonProps) => JSX.Element;

interface SolflareButtonProps {
    setPublicKey: Function;
    height?: string;
    backgroundColor?: string;
    color?: string;
    borderRadius?: string;
    width?: string;
}
declare const SolflareButton: ({ setPublicKey, height, backgroundColor, color, borderRadius, width }: SolflareButtonProps) => JSX.Element;

export { PhantomButton, SolflareButton };
