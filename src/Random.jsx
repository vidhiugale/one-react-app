export function Random()
{
    let num=Math.random()*100;
    return <h1 style={{backgroundColor:"lightpink"}}>Random number is: {Math.round(num)}</h1>
}
