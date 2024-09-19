'use client'


export default function Blog({params} : {params: {segmentName: string}}) {
        console.log(params.segmentName)
    return (
        <div>
            <h1>Blog</h1>
        </div>
    );
}