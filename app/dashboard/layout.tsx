'use client'
import {useEffect} from "react";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}){
    useEffect(()=>{
        console.log("Dashboard Layout Mounted")
    },[])
 return (
        <div>
            <h1>Dashboard Layout</h1>
            {children}
        </div>
 )
}