import { forwardRef } from "react";
import "../styles/index.scss"
export interface CheckboxProps {
  onChange: (checked: boolean) => void
  label: string
  checked?: boolean
  disabled?: boolean
  ref?: any
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({label, checked, disabled, onChange}: CheckboxProps, ref) => {
  return (
    <label className={`checkbox ${disabled ? 'checkboxDisabled': ''}`}>
      <span className="checkbox__input">
        <input type="checkbox" ref={ref} disabled={disabled} checked={checked} onChange={(event) => onChange(event.target.checked)} />
        <CheckMark />
      </span>
      <span className="checkbox__label">{label}</span>
    </label>
  );
})

function CheckMark () {
  return (
    <span className="checkbox__control">
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
        <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' />
      </svg>
    </span>
  );
}

