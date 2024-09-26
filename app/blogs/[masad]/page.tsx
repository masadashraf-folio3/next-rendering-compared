export default function Page({params} : {masad: string}){
    return (
        <div>
            <h1>Page</h1>
            <h2>Segment : {JSON.stringify(params.masad)}</h2>
        </div>
    );
}