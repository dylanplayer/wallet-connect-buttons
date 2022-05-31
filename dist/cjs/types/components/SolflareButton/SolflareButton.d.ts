/// <reference types="react" />
export interface SolflareButtonProps {
    setPublicKey: Function;
    height?: string;
    backgroundColor?: string;
    color?: string;
    borderRadius?: string;
    width?: string;
}
declare const SolflareButton: ({ setPublicKey, height, backgroundColor, color, borderRadius, width }: SolflareButtonProps) => JSX.Element;
export default SolflareButton;
