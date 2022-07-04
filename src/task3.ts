type UnaryFunction<A, B> = (_: A) => B;
type BinaryFunction<A, B, C> = (__: A, _: B) => C;

const f = <A, B, C>(
  g: BinaryFunction<A, B, C>,
  a: A
): UnaryFunction<B, C> => {return (b: B) => {
   const y = g(a,b)
   return y
}};




const result = f((c: number, d: string) => {
    if( JSON.stringify(c) == d) {
        return true
       }
       else return false
}, 4) 

console.log(result('gsdfsdfs'))
console.log(result('4'))