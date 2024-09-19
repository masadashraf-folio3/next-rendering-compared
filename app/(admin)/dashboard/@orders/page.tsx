export default async function Orders(){
    await new Promise(resolve => setTimeout(resolve, 6000));
    return (
      <div>
        <h1>Orders listing</h1>
      </div>
    );

}