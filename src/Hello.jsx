function Hello()
{
     let name="Vidhi";
     let number=456789;
     let fullname=()=>
     {
          return "Vidhi Ugale";
     }
     let num=()=>
     {
          return 456789;
     }
     return <h2>Hello Everyone. I am {fullname()}. My number is {num()}</h2>
}
export default Hello;    