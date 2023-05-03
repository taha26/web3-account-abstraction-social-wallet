import { FC } from "react"

const Box: FC<{ children: React.ReactNode, classes: string }> = ({ children, classes }) => {
    return (
        // <div className="border border-cyan-500 w-[90%] m-auto">
        <div className={`${classes}`}>
            {children}
        </div>
    )
}

export default Box;
