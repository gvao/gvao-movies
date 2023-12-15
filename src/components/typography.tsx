type ChildrenProps = { children: React.ReactNode }

export const Title = ({ children }: ChildrenProps) => (
    <h1
        className="text-2xl font-bold text-center"
    >
        {children}
    </h1>
)

export const SubTitle = ({ children }: ChildrenProps) => (
    <h2 className="text-xl" >{children}</h2>
)