export type InputCSS = {
  isFocused: boolean;
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage: string;
  isLast?: boolean;
}
