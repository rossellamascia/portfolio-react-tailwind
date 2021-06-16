import React from "react";

export interface AlertProps {
    className: string;
    textMain: string;
    text?: string;
    icon?: React.SVGProps<SVGElement>;
}

const Alert: React.VFC<AlertProps> = ({ className, textMain, text, icon }) => {

    return (
        <div className={className} role="alert">
            <div className="flex items-center">
                {icon && (
                    <div className="py-1">
                        <svg className={icon.className} xmlns="http://www.w3.org/2000/svg" fill={icon.fill} viewBox={icon.viewBox} stroke={icon.stroke}>
                            <path strokeWidth={2}  d={icon.path} />
                        </svg>
                    </div>
                )}
                <div>
                    <p className="font-bold">{textMain}</p>
                    {text && <p className="text-sm">{text}</p>}
                </div>
            </div>
        </div>
    )
};
export default Alert;