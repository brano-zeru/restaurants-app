import { useState, type ComponentPropsWithoutRef, type FC } from "react";

interface IconProps extends ComponentPropsWithoutRef<'img'> {
    src: string,
    style?: React.CSSProperties,
    hoverStyles?: React.CSSProperties,
}

export const Icon: FC<IconProps> = ({
    src,
    style,
    hoverStyles,
    ...props
}) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <img  
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            src={src}
            style={{
                height: '15px', 
                width: '15px',
                ...style,
                ...(isHovered && hoverStyles)
            }} 
            {
                ...props
            }
        />
    )
}