type ButtonProps = {
    children?: React.ReactNode;
    onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <div className="flex items-center px-8 py-2 rounded cursor-pointer bg-primary" onClick={onClick}>
            <a href="#" className="text-[#FFF] font-bold">{children}</a>
        </div>
    );
}

export default Button;