export default function DashboardLayout({children, orders, users}) {

    return (
        <>
            <h1 style={{textAlign: "center", fontSize: "larger"}}>Dashboard Layout</h1>
            {children}
            {orders}
            {users}
        </>
    )
}