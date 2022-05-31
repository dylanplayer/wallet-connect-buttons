/// <reference types="react" />
export interface PhantomButtonProps {
    setPublicKey: Function;
    height?: string;
    backgroundColor?: string;
    color?: string;
    borderRadius?: string;
    width?: string;
}
declare const PhantomButton: ({ setPublicKey, height, backgroundColor, color, borderRadius, width }: PhantomButtonProps) => JSX.Element;
export default PhantomButton;
