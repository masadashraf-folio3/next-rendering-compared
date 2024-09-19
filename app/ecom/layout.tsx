export default function Layout({children, ...props}) {
    return (
        <>
            <h1>Layout</h1>

            {children}
            {props.users}
            {props.orders}

        </>
    );

}