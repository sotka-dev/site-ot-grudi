import { useState, useRef, useEffect } from "react";
import styles from "./customSelect.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

interface Option {
	label: string;
	value: string;
}

interface CustomSelectProps {
	options: Option[];
	value?: string;
	defaultValue?: string;
	placeholder?: string;
	onChange: (value: string) => void;
}

export const CustomSelect = ({
	options,
	value,
	defaultValue,
	placeholder = "",
	onChange,
}: CustomSelectProps) => {
	const [internalValue, setInternalValue] = useState<string | undefined>(
		value ?? defaultValue,
	);
	const [open, setOpen] = useState(false);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setInternalValue(value ?? defaultValue);
	}, [value, defaultValue]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target as Node)
			) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const selectedOption = options.find((opt) => opt.value === internalValue);

	const handleChange = (newValue: string) => {
		setInternalValue(newValue);
		onChange(newValue);
		setOpen(false);
	};

	return (
		<div className={cn("select-wrapper")} ref={wrapperRef}>
			<div className={cn("select-box")} onClick={() => setOpen(!open)}>
				<span>{selectedOption ? selectedOption.label : placeholder}</span>
				<span className={cn("arrow", { open })}>▼</span>
			</div>

			{open && (
				<ul className={cn("options-list")}>
					{options.map((opt) => (
						<div
							key={opt.value}
							className={cn("option", {
								selected: opt.value === internalValue,
							})}
							onClick={() => handleChange(opt.value)}
						>
							{opt.label}
						</div>
					))}
				</ul>
			)}
		</div>
	);
};
